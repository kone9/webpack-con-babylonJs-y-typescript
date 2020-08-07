import * as BABYLON from 'babylonjs';
export declare class Sphere {
    private _sphere;
    private _posicion;
    get posicion(): BABYLON.Vector3;
    set posicion(value: BABYLON.Vector3);
    constructor(scene: BABYLON.Scene);
    private CreateSphere;
    get sphere(): BABYLON.Mesh;
    set sphere(value: BABYLON.Mesh);
}
