import * as BABYLON from 'babylonjs';
export declare class EscenaPrincipal {
    private _scene;
    constructor(engine: BABYLON.Engine, canvas: HTMLCanvasElement);
    private CreateScene;
    private CreateCamera;
    private CreateLighting;
    private ResizeWindow;
    MostrarMenu(mostrarMenu: boolean): void;
    get scene(): BABYLON.Scene;
    set scene(value: BABYLON.Scene);
}
