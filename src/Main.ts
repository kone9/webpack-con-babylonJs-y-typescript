import "./style.css"; //importante cuando uso css importarlos al Archivo MAIN

import * as BABYLON from 'babylonjs';//importo librería de babylon.js
//import {Esfera}  from './Esfera';//importa la clase Esfera que es una escena de babylon.js con un mesh de tupo esfera
import {EscenaPrincipal} from './EscenaPrincipal';

class Main
{
    public static Main():void
    {
        let canvas:HTMLCanvasElement = document.getElementById("renderCanvas") as HTMLCanvasElement;
        let engine:BABYLON.Engine = new BABYLON.Engine(canvas,true);

 
        let _EscenaPrincipal = new EscenaPrincipal(engine,canvas);
        _EscenaPrincipal.MostrarMenu(true);

        function RenderizarScenaEscenaPrincipal():void
        {
            _EscenaPrincipal.scene.render();    
        }
        
        engine.runRenderLoop(RenderizarScenaEscenaPrincipal);//renderiza la escena 60 veces por segundo

        console.log("hola mundo");
    }    
}



//Inicio la funcion statica Main sin instanciar la clase Main,
//esto es asi para mantener la practica de c# y usar clases para tener
//una guia por donde empieza el programa
Main.Main();