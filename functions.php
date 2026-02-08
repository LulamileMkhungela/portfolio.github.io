<?php
// Fix Elementor frontend URLs when migrating domains
add_filter('elementor/frontend/localize_settings', function($config) {

    // Old domain in your scripts
    $old_domain = 'touchfoundry.co.za';

    // New domain (current site)
    $new_domain = parse_url(home_url(), PHP_URL_HOST);

    // Convert config to JSON string
    $config_json = json_encode($config);

    // Replace all instances of old domain with new domain
    $config_json = str_replace($old_domain, $new_domain, $config_json);

    // Convert back to array
    $config = json_decode($config_json, true);

    return $config;
});
