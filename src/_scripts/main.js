// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Link = require('../_modules/link/link');
var scrollTo = require('jquery-scrollto');

$(function() {
    new Link(); // Activate Link modules logic

    $('#portfolio-button').on('click', function () {
        $('.featured-work').ScrollTo();
    });
});
