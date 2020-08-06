import * as BABYLON from "babylonjs";

export class Esfera 
{
    
    private _engine: BABYLON.Engine;
    private _canvas: HTMLCanvasElement;
    private _scene: BABYLON.Scene;

    constructor(engine:BABYLON.Engine,canvas:HTMLCanvasElement)
    {
        this._engine = engine;
        this._canvas = canvas;
        let scene:BABYLON.Scene = new BABYLON.Scene(engine);
        this._scene = scene;
        
        this.RedimensionarVentana(engine);
        this.CrearCamara(scene);
        this.CrearEsfera(scene);
        this.Crearluz(scene);
        console.log("instancie la esfera");
        console.log("agregando más texto");
    }


    private Crearluz(scene:BABYLON.Scene)
    {
        let light:BABYLON.HemisphericLight = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1,1,0),scene);

    }
    private CrearCamara(scene:BABYLON.Scene)
    {
        let camera:BABYLON.ArcRotateCamera = new BABYLON.ArcRotateCamera("nombre",Math.PI/90,Math.PI/2,2,BABYLON.Vector3.Zero(),scene);
    }
    private CrearEsfera(scene:BABYLON.Scene)
    {
        let sphere:BABYLON.Mesh = BABYLON.MeshBuilder.CreateSphere("sphere",{diameter:1},scene);

    } 
    private RedimensionarVentana(engine:BABYLON.Engine)
    {
        window.addEventListener("resize", function ()
        {
            engine.resize();
        });
    }
    public get scene(): BABYLON.Scene {
        return this._scene;
    }
    public set scene(value: BABYLON.Scene) {
        this._scene = value;
    }
    public get engine(): BABYLON.Engine {
        return this._engine;
    }
    public set engine(value: BABYLON.Engine) {
        this._engine = value;
    }
    public get canvas(): HTMLCanvasElement {
        return this._canvas;
    }
    public set canvas(value: HTMLCanvasElement) {
        this._canvas = value;
    }
}