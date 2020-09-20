// como esto corre sobre node podemos usar sus funciones
//imporatando con node pod
const path = require('path');// se usa el nombre que sale en la dependencia
const HTMLWebpackPlugin = require('html-webpack-plugin');//importamos el plugin

module.exports = {

    entry: { // diferentes modulos que usamos como entrys
        index: './src/js/index.js'
        //, dejando solo un entry point
        //nosotros: './src/js/nosotros.js'
    },
    //entry: ['./src/js/index.js'],// loas entrys serian los bundles 
    output: {
        //filename: 'bundle.js',
        filename: '[name].bundle.js',// crea un bundle diferente para cada archivo
        path: path.join(__dirname, '/dist')        
        },
        //vienen los loaders si queremos agregar imagens css,, cosas estaticas
        // en rules pones los loaders de css, babel, etc
    devServer:{
        contentBase: path.join(__dirname, 'dist'),//carpeta donde se van a servir los archivos
        compress: true,
        port: 9000,
        watchContentBase: true
    },

    module: {
            rules: [
                {// reglas para archivos js
                    test: /\.js$/, 
                    // los arhcivos a cojer, los cojemos con una expreison regualr
                    exclude: /node_modules/, 
                    // archivos a excluir o carpetas
                    use:  // el loader a usar con estos archivos
                    {
                        loader: 'babel-loader'// loader de babel
                    }
                },
                // reglas para archivos de Css
                {
                    test: /\.css$/,
                    use:[
                       'style-loader',
                       'css-loader'
                    ]
                },
                { 
                    test: /\.scss$/,
                    use: [
                        
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        optimization: {//plugins de WEBPACK para optimizar el codigo...
            splitChunks:{
                cacheGroups:{
                    commons:{
                        test: /[\\/]node_modules[\\/]/,//archjivos vamos a optimizar y que vamos usar en node
                        name: 'common',// el nombre del archivo
                        chunks: 'all'
                    }
                }
            }
        },
        // agregamos los puglin
        plugins: [// instanciamos el objecto del plungin y ya esta listo para usar
            new HTMLWebpackPlugin({
                filename: 'index.html',
                template: 'src/index.html',// el template que vmaos a usar
                title: 'Login'
            }),// crear mas paginas
            new HTMLWebpackPlugin({
                filename: 'nosotros.html',
                template: 'src/nosotros.html',// el template que vmaos a usar
                title: 'Hello'
            })

        ]
    }

//PARTES DE WEBPACK
//entry
//output
//loaders
//plugins
