const path = require("path");//se usa para buscar carpetas
const htmlWebpackPlugin = require('html-webpack-plugin');//para usar el plugin de html para autogenerar un nuevo html
const miniCssExtractPluginLoader = require('mini-css-extract-plugin');//para usar el plugin de css para autogenerar un nuevo css


module.exports =
{
    entry:'./src/Main.ts',//Este archivo va a leer

    output://salido del archivo convertido adonde lo va a colocar
    {
        filename:'bundle.js',//todos los archivos convertiros iran a este archivo
        path: path.resolve(__dirname,'public'),//ruta de la carpeta donde colocara el archivo
    },
    
    resolve://resuelve las extensiones para que no alla problemas de compilación
    {
         extensions: ['.tsx', '.ts', '.js']//extensiones que resuelve 
    },
    
    module://aqui en las reglas especifico a webpack lo que va a hacer
    {
        rules: //reglas para que funcione ts parece que soluciona un problema con la compilación de typescript a javascript
        [
            {
                test: /\.ts?$/,//testea todos los archivos que termine con ts
                loader:"ts-loader"
            },
            
            {
                test: /\.css$/i,//testea todos los archivos que termine con css
                use:
                [
                    {loader: miniCssExtractPluginLoader.loader},
                    {loader:'css-loader'},//llama al css dentro del javascript y luego es convertido junto con el código a la carpeta public
                ]
            },

            {
                exclude: /node_modules/ //para exclui la carpeta modules en el compilado
            }
        ]
    },
    
    plugins://plugins que ayudan a webpack a entender como exportar los archivos 
    [
        new htmlWebpackPlugin({//para que funcione este modulo hay que importarlo ojo la ruta es diferente al css
            filename: 'index.html',//nombre del nuevo archivo que creara
            template: './src/index.html',}),//la ruta esta relacionada al lugar donde esta el archivo principal html,luego webpack se encarga de colocarlo en la carpeta public
        new miniCssExtractPluginLoader({//este plugin extraera los archivos css a la carpeta public
            filename: 'bundle.css',//nombre del nuevo archivo que creara
            //template: 'bundle.css' //archivo que se creara a la hora de exportar todos los css
        })
    ],

    devServer: //relacionado a la configuración del servidor
    {
        port:3000 //el servidor usa el puerto 3000        
    },

    //El modo producción es para la compilación final
    //este modo de compilado hace que la compilación tarde más
    //tiempo, USAR SOLAMENTE CUANDO EL PROYECTO ESTE TERMINADO
    //mode:"production"
    
    //Modo de desarrollo en este proyecto   
    mode:"development",

    //Habilita la depuración en la web usando typescript 
    //OJO AUMENTA EL PESO FINAL DEL ARCHIVO
    //DESHABILITAR AL TERMINAR EL PROYECTO
    //osea al compilar para producción
    devtool:'eval-source-map'


}