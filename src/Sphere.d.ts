import * as BABYLON from 'babylonjs';
export declare class Sphere {
    private _sphere;
    private _position;
    constructor(scene: BABYLON.Scene);
    CreateSphere(scene: BABYLON.Scene): BABYLON.Mesh;
    get position(): BABYLON.Vector3;
    set position(value: BABYLON.Vector3);
    get sphere(): BABYLON.Mesh;
    set sphere(value: BABYLON.Mesh);
}
