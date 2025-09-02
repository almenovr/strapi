'use strict';

/**
 * main-city service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-city.main-city');
