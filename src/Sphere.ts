import * as BABYLON from 'babylonjs';


export class Sphere
{
    private _sphere: BABYLON.Mesh;
    private _posicion: BABYLON.Vector3;
    public get posicion(): BABYLON.Vector3 {
        return this._posicion;
    }
    public set posicion(value: BABYLON.Vector3) {
        this._posicion = value;
    }
    

    constructor(scene:BABYLON.Scene)
    {
        this.CreateSphere(scene);
        
        this._posicion = this._sphere.position;
    }
    private CreateSphere(scene:BABYLON.Scene):void
    {
        let esfera:BABYLON.Mesh = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);
        this._sphere = esfera;
    }
    public get sphere(): BABYLON.Mesh {
        return this._sphere;
    }
    public set sphere(value: BABYLON.Mesh) {
            this._sphere = value;
    }
}