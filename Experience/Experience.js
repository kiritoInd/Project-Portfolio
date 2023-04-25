import * as THREE from "three"
import Sizes from "./utils/Sizes"
import Time from "./utils/Time.js"
import Resources from "./utils/Resources.js"
import assets from "./utils/assets.js"

import Camera from "./Camera.js"
import Renderer from "./Renderer.js"

import World from "./World/World.js"




export default class Experience{
    static instance;
    constructor(canvas){
       if(Experience.instance){
        return Experience.instance
       }
       Experience.instance = this
       this.canvas = canvas;
       this.scene = new THREE.Scene();
       this.time = new Time();
       this.sizes = new Sizes();
       this.camera = new Camera();
       this.renderer = new Renderer();
       this.resources = new Resources(assets);
       this.world = new World();
   
       

     
       
       this.time.on("update", () => {
   
           this.update();
       })

       this.sizes.on("resize", () => {

        this.resize();
    })
    }


    resize() {
        this.camera.resize();
        // this.world.resize();
        this.renderer.resize();


    }

    update(){
        this.camera.update();
        this.renderer.update();
        this.world.update();

    
    }



}