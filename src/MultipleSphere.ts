import * as BABYLON from 'babylonjs';
import {Sphere} from './Sphere';

export class MultipleSphere
{
    constructor(scene:BABYLON.Scene)
    {
        let newSphere:Sphere = new Sphere(scene)
        let contador:number = 0;
        for (let index = 0; index < 5; index++)
        {
            let newSphere:Sphere = new Sphere(scene);
            newSphere.sphere.position = new BABYLON.Vector3(0,index + contador,0); 
            contador +=2;
        }
    }
}