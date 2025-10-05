const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Replace with your local file path
  const filePath = 'file://' + path.resolve('dummy.html');
  await page.goto(filePath, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: 'Lulamile_Mkhungela_Resume.pdf',
    format: 'A4',
    printBackground: true
  });

  await browser.close();
  console.log('PDF generated successfully!');
})();
