// vue.config.js

const webpack = require('webpack')

module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },
    
}

