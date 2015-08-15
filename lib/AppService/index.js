'use_strict'

module.exports= AppService



/**
 * AppService
 *
 * @constructor
 * @return {AppService}
 */
function AppService(App, config) {

    this.config= config

    this.App= App

}



AppService.prototype.createApp= function () {
    return this.App()
}
