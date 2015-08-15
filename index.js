'use_strict'

const AppService= require('./lib/AppService')



/**
 * awsm-architect-app
 */
module.exports= function setup(options, imports, register) {

    console.assert(options.config, "Option 'config' is required")

    const $config= imports.$config
    const cfg= $config.create(options.config)

    const App= imports['$app.App']



    const $app= new AppService(App)



    register(null, {
        $app: $app,
    })

}
