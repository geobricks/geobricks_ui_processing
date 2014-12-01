var root = '../modules/';

define(['jquery',
        'mustache',
        'text!' + root + 'geobricks_ui_processing/html/templates.html',
        'i18n!' + root + 'geobricks_ui_processing/nls/translate',
        'bootstrap'], function ($, Mustache, templates, translate) {

    'use strict';

    function PROCESSING() {

        this.CONFIG = {
            lang: 'en'
        };

    }

    /**
     * This is the entry method to configure the module.
     *
     * @param config Custom configuration in JSON format to extend the default settings.
     */
    PROCESSING.prototype.init = function(config) {

        /* Extend default configuration. */
        this.CONFIG = $.extend(true, {}, this.CONFIG, config);

        /* Fix the language, if needed. */
        this.CONFIG.lang = this.CONFIG.lang != null ? this.CONFIG.lang : 'en';

        console.debug(this.CONFIG);

    };

    return new PROCESSING();

});
