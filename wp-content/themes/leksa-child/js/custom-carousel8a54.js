document.addEventListener('DOMContentLoaded', function () {
    // console.log('Custom carousel script loaded.');

    // Ensure GSAP and Draggable are available
    if (typeof gsap === 'undefined' || typeof Draggable === 'undefined') {
        // console.error('GSAP or Draggable not found. Ensure they are enqueued.');
        return;
    }
    if (typeof Swiper === 'undefined') {
        // console.warn('Swiper.js not found. Elementor carousel features may be limited.');
    }
    // console.log('GSAP, Draggable, and Swiper (if available) loaded.');

    // Store for cleanup
    let draggableInstances = [];

    // Function to clean up existing carousels
    function cleanupCarousels() {
        // console.log('Cleaning up existing carousel instances.');
        // Kill all Draggable instances
        draggableInstances.forEach(instance => {
            if (instance) {
                instance.disable();
                instance.kill();
            }
        });
        draggableInstances = [];
    }

    // Function to initialize Models Carousel (GSAP Draggable)
    function initializeModelsCarousel(carousel, index) {
        const carouselId = carousel.dataset.carouselId || 'none';
        // console.log(`Processing Models Carousel ${index + 1} (ID: ${carouselId})`);

        // Kill existing Draggable instance
        const existingDraggable = Draggable.get(carousel);
        if (existingDraggable) {
            // console.log(`Killing existing Draggable for Models Carousel ${index + 1}`);
            existingDraggable.disable();
            existingDraggable.kill();
        }

        // Clear inline styles
        gsap.set(carousel, { clearProps: 'all' });
        carousel.style.pointerEvents = 'auto';
        carousel.style.touchAction = 'pan-y';
        carousel.style.userSelect = 'none';
        //remove padding
        carousel.style.padding = '0';
        //disable transition
        carousel.parentElement.style.transition = 'none';

        // Calculate bounds to stop at last item
        const gap = parseFloat(getComputedStyle(carousel).gap || 20);
        const carouselWidth = carousel.offsetWidth;
        const parentWidth = carousel.parentElement.offsetWidth;
        const minX = 0;
        const maxX = parentWidth - carouselWidth - gap;
        // console.log(`models ${index + 1} maxX: ${maxX}`);

        // Create GSAP Draggable instance
        const dragInstance = Draggable.create(carousel.parentElement, {
            type: 'x',
            bounds: {
                minX: minX,
                maxX: maxX
            },
            inertia: true,
            dragResistance: 0.2,
            zIndexBoost: true,
            onDrag: function () {
                gsap.set(carousel.parentElement, { x: this.x });
            },
            onDragStart: function () {
                // console.log(`Drag started on Models Carousel ${index + 1}`);
            },
            onDragEnd: function () {
                // console.log(`Drag ended on Models Carousel ${index + 1}, x: ${this.x}`);
            }
        })[0];

        dragInstance.applyBounds();
        draggableInstances.push(dragInstance);
        // console.log(`Initialized Draggable for Models Carousel ${index + 1}`);
    }

    // Function to initialize Testimonial Carousel (GSAP Draggable)
    function initializeTestimonialCarousel(carousel, index) {
        const carouselId = carousel.dataset.carouselId || 'none';
        // console.log(`Processing Testimonial Carousel ${index + 1} (ID: ${carouselId})`);
        const wrapper = carousel.querySelector('div:first-child');

        // Kill existing Draggable instance
        const existingDraggable = Draggable.get(carousel);
        const existingDraggable1 = Draggable.get(wrapper);
        if (existingDraggable) {
            existingDraggable.disable();
            existingDraggable.kill();
        }
        if (existingDraggable1) {
            existingDraggable1.disable();
            existingDraggable1.kill();
        }

        // Clear inline styles
        gsap.set(carousel, { clearProps: 'all' });
        carousel.style.pointerEvents = 'auto';
        carousel.style.touchAction = 'pan-y';
        carousel.style.userSelect = 'none';
        //disable transition
        carousel.style.transition = 'none';
        //remove height from wrapper
        if (wrapper) {
            //get the largest testimonial item height
            var testimonialItems = wrapper.querySelectorAll('.pe-testimonial');
            if(testimonialItems.length > 0) {
                var maxHeight = 0;
                testimonialItems.forEach(item => {
                    const itemHeight = item.offsetHeight;
                    if (itemHeight > maxHeight) {
                        maxHeight = itemHeight;
                    }
                });
                wrapper.style.height = `${maxHeight}px`;
            }
            // wrapper.style.height = 'auto';
        }

        // Find items (try .cr--item, fall back to .swiper-slide or direct children)
        const wrapperGap = parseFloat(getComputedStyle(wrapper).gap || 20);

        // Calculate total width with gap
        var parentWidth = carousel.offsetWidth;
        //check if carousel has class pt--carousel
        if (carousel.classList.contains('pt--carousel')) {
            parentWidth = carousel.parentElement.parentElement.offsetWidth;
        }
        var wrapperWidth = wrapper.offsetWidth;
        let limit = parentWidth - wrapperWidth - wrapperGap;
        // Calculate bounds to stop at last item
        const minX = 0;//how far left
        const maxX = limit;//how far right
        // console.log('Max X:', maxX);

        // Create GSAP Draggable instance
        const dragInstance = Draggable.create(carousel, {
            type: 'x',
            bounds: {
                minX: minX,
                maxX: maxX
            },
            inertia: true,
            dragResistance: 0.2,
            zIndexBoost: false,
            onDrag: function () {
                gsap.set(carousel, { x: this.x });
                gsap.set(wrapper, { x: 0 });
            },
            onDragStart: function () {
                // console.log(`Drag started on Testimonial Carousel ${index + 1}`);
            },
            onDragEnd: function () {
                // console.log(`Drag ended on Testimonial Carousel ${index + 1}, x: ${this.x}`);
            }
        })[0];

        dragInstance.applyBounds();
        draggableInstances.push(dragInstance);
        // console.log(`Initialized Draggable for Testimonial Carousel ${index + 1}`);
    }

    // Function to initialize Elementor Carousel (Swiper-based)
    function initializeElementorCarousel(carousel, index) {
        const carouselId = carousel.dataset.carouselId || 'none';
        // console.log(`Processing Elementor Carousel ${index + 1} (ID: ${carouselId})`);

        // Check if it's the models carousel
        if (carouselId === 'models' || carousel.classList.contains('cr--drag') || carousel.querySelector('.cr--item')) {
            // console.log(`Elementor Carousel ${index + 1} is a Models Carousel.`);
            initializeModelsCarousel(carousel, index);
            return;
        }

        if (typeof Swiper === 'undefined') {
            // console.error(`Swiper.js not available for Elementor Carousel ${index + 1}.`);
            return;
        }

        // Find Swiper container
        const swiperContainer = carousel.querySelector('.swiper, .swiper-container, .elementor-carousel') || carousel;
        if (!swiperContainer) {
            // console.error(`No Swiper container found in Elementor Carousel ${index + 1}.`);
            return;
        }

        // Verify Swiper structure
        const swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');
        const swiperSlides = swiperContainer.querySelectorAll('.swiper-slide');
        if (!swiperWrapper || swiperSlides.length === 0) {
            // console.error(`Invalid Swiper structure in Elementor Carousel ${index + 1}. Missing .swiper-wrapper or .swiper-slide.`);
            return;
        }

        // Clear conflicting styles
        swiperContainer.style.touchAction = 'auto';
        swiperContainer.style.pointerEvents = 'auto';
        swiperWrapper.style.touchAction = 'auto';

        // Get or create Swiper instance
        const swiperInstance = swiperContainer.swiper;
        if (!swiperInstance) {
            // console.warn(`No Swiper instance for Elementor Carousel ${index + 1}. Initializing new instance.`);
            const newSwiper = new Swiper(swiperContainer, {
                slidesPerView: 'auto',
                spaceBetween: parseFloat(getComputedStyle(swiperContainer).gap || 20),
                touchRatio: 1.5,
                resistanceRatio: 0,
                freeMode: true,
                freeModeMomentum: false,
                //restrict the distance to the last item
                freeModeSticky: true,
                watchOverflow: true,
                observer: true,
                observeParents: true,
                observerParents: true,
                observerSlideChildren: true,
                on: {
                    // touchStart: () => console.log(`Touch started on Elementor Carousel ${index + 1}`),
                    // slideChange: () => console.log(`Slide changed on Elementor Carousel ${index + 1}`),
                    // touchMove: () => console.log(`Dragging Elementor Carousel ${index + 1}`)
                }
            });
            // console.log(`Initialized new Swiper instance for Elementor Carousel ${index + 1}`);
            return;
        }

        swiperInstance.params.touchRatio = 1.5;
        swiperInstance.params.resistanceRatio = 0;
        swiperInstance.params.freeMode = true;
        swiperInstance.params.freeModeMomentum = true;
        swiperInstance.update();
        // console.log(`Updated Swiper instance for Elementor Carousel ${index + 1}`);
    }

    // Function to initialize carousels (exported for scripts.js)
    function initializeCarousels(testimonialsClicked = false) {
        cleanupCarousels();

        const testimonialCarousels = document.querySelectorAll('.pe--carousel.cr--drag, .pt--carousel');
        const elementorCarousels = document.querySelectorAll('.convert--carousel.cr--drag, .swiper, .elementor-carousel');

        // console.log(`Found ${testimonialCarousels.length} Testimonial Carousel(s)`);
        // console.log(`Found ${elementorCarousels.length} Elementor Carousel(s)`);

        testimonialCarousels.forEach((carousel, index) => {
            initializeTestimonialCarousel(carousel, index);
        });

        elementorCarousels.forEach((carousel, index) => {
            initializeElementorCarousel(carousel, index);
        });

        //add event listener to re-check carousels when .pe--testimonials is clicked once
        document.querySelectorAll('.pe--testimonials').forEach(testimonial => {
            testimonial.addEventListener('click', () => {
                if(!testimonialsClicked) {
                    testimonialsClicked = true;
                    setTimeout(function (){
                        // console.log('Testimonials section clicked. Re-initializing carousels.');
                        initializeCarousels(true);
                    }, 1000); // Delay to ensure DOM updates
                }
            });
        });
    }

    // Expose initializeCarousels globally for scripts.js
    window.initializeCarousels = initializeCarousels;

    // Run initially if DOM is ready, else wait
    if (document.readyState === 'complete') {
        initializeCarousels();
    } else {
        window.addEventListener('load', initializeCarousels);
    }

    // Cleanup on unload
    window.addEventListener('unload', () => {
        cleanupCarousels();
        // console.log('Cleaned up on page unload.');
    });
});