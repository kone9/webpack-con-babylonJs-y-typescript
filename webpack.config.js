const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPluginLoader = require('mini-css-extract-plugin');


module.exports =
{
    entry:'./src/Main.ts',//lugar de entrada del archivo

    output://lugar de salido del archivo
    {
        filename:'bundle.js',
        path: path.resolve(__dirname,'public'),
    },
    
    resolve:
    {
         extensions: ['.tsx', '.ts', '.js'] 
    },
    
    module:
    {
        rules: //reglas para que funcione ts parece que soluciona un problema con la compilación de typescript a javascript
        [
            {
                test: /\.tsx?$/,
                loader:"ts-loader"},
            {
                test: /\.css$/i,
                use: [miniCssExtractPluginLoader.loader, 'css-loader'],
            },

            {
                exclude: /node_modules/ //para exclui la carpeta modules en el compilado
            }
        ]
    },
    
    plugins: 
    [
        new htmlWebpackPlugin({//copia el archivo html a la carpeta donde estan compilados los archivos
            template: './src/index.html',}),
        new miniCssExtractPluginLoader({//este plugin extraera los archivos css a la carpeta public
            template: 'bundle.css' //archivo que se creara a la hora de exportar todos los css
        })
    ],

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