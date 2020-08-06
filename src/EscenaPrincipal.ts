
import * as BABYLON from 'babylonjs';

import {MultipleSphere} from './MultipleSphere';


export class EscenaPrincipal 
{
    private _scene: BABYLON.Scene;
    
    constructor(engine:BABYLON.Engine,canvas:HTMLCanvasElement)
    {
        this._scene = this.CreateScene(engine);
        this.CreateCamera(canvas,this._scene);
        this.CreateLighting(this._scene)
        
        let multiSphere:MultipleSphere = new MultipleSphere(this._scene);//create multiple sphere
        
        this.ResizeWindow(engine);
        
    }
    private CreateScene(engine:BABYLON.Engine):BABYLON.Scene
    {
        let scene:BABYLON.Scene = new BABYLON.Scene(engine);
        return scene;
    }

    private CreateCamera(canvas:HTMLElement,scene:BABYLON.Scene)
    {
        let camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0,0,5), scene);
        camera.attachControl(canvas, true);
    }

    private CreateLighting(scene:BABYLON.Scene):BABYLON.DirectionalLight
    {
        let light:BABYLON.DirectionalLight = new BABYLON.DirectionalLight("light3", new BABYLON.Vector3(0, 1, 0), scene);
        return light;
        
    }

    private ResizeWindow(engine:BABYLON.Engine)
    {
        window.addEventListener("resize", function () { //agrego el evento para que constantemente se acutalice el navegador
            engine.resize();
        });
    }
    public MostrarMenu(mostrarMenu:boolean)
    {
        if(mostrarMenu == true)
        {
            this.scene.debugLayer.show();//muestra el menu inspector
        }
        else
        {
            this.scene.debugLayer.hide();//oculta el menu inspector
        }
    }
    public get scene(): BABYLON.Scene {
        return this._scene;
    }
    public set scene(value: BABYLON.Scene) {
            this._scene = value;
    }

}