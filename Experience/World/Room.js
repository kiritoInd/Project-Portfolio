import Experience from "../Experience.js";
import * as THREE from "three";
// import Time from "../utils/Time.js";
import GSAP from "gsap";

export default class Room {
    constructor() {
      
        this.experience = new Experience();
        this.scene = this.experience.scene;
       
        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;
        
        this.actualRoom.position.x = 0
        this.actualRoom.position.z = 0
        this.roomChildren = {}


        this.lerp = {
            current: 0,
            target: 0,
            ease: 0.1
        }
        
        this.setModel();
        this.onMouseMove();
      
    }
   
    setModel(){
        console.log(this.actualRoom)
        this.scene.add(this.actualRoom)
        this.actualRoom.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;
            if(child.name === "c1" || 
            child.name === "c2" ||
            child.name === "c3" ||
            child.name === "c4" ||
            child.name === "c5" ||
            child.name === "c6" ||
            child.name === "c7" ||
            child.name === "c8" ||
            child.name === "c9" ||
            child.name === "c10" ||
            child.name === "c11" ||
            child.name === "c12" ||
            child.name === "c13" ||
            child.name === "c14"){
                child.scale.set(0, 0, 0)
            }

            if(child.name === "t1" || 
            child.name === "t2" ||
            child.name === "t3" ||
            child.name === "t4" ||
            child.name === "t5" ||
            child.name === "t8" ||
            child.name === "t9" ||
            child.name === "t10"
            ){
                child.scale.set(0, 0, 0)
            }
            if(child.name === "t6"){
                child.position.x = -7.74799 
            }
            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                })
            }
            this.roomChildren[child.name.toLowerCase()] = child;
            
        });

    }
    onMouseMove() {
        window.addEventListener("mousemove", (e) => {

            this.rotation = ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
            this.lerp.target = this.rotation * 0.1;
        });
    }
    resize() {}


    update() {
        this.lerp.current = GSAP.utils.interpolate(
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease
        );
        
        // this.time1 = this.experience.time.elapsed*0.00007
        
        // this.actualRoom.rotation.y=(this.time1)
        this.actualRoom.rotation.y = this.lerp.current;
    }
}