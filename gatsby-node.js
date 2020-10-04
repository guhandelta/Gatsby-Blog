/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

 const path = require('path');
 
// For Absolute Imports
exports.onCreateWebpackConfig = ({ actions}) =>{
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname,'src'), 'node_modules']
        },
    })
}