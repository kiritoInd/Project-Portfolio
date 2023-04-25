import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";




export default class Controls {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.time;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.room = this.experience.world.room.actualRoom;
        this.roomchildren = this.experience.world.room.roomChildren
        this.sunlight = this.experience.world.environment.sunLight;
        GSAP.registerPlugin(ScrollTrigger);
        this.setPath();
        // this.setraycaster();
    }
    
    setPath(){
        console.log(this.roomchildren)

        this.timeline = new GSAP.timeline({
            scrollTrigger: {
                trigger: ".first-move",
                

                start: "top top",
                end: "bottom bottom",
                scrub: 0.6,
                
        
                invalidateOnRefresh: true,
            },
          });
       
          this.timeline.to(this.room.rotation,{
              y: 5.2
          },)  
        this.timeline.to(this.room.position,{
            y:3.2,
            z:-0.4,
            x:0.6,
            duration: 3,
        },"same")
        this.timeline.to(this.sunlight.position,{
            y:4,
            x:0,
            z:8

        },"same")
        this.timeline.to(this.camera.perspectiveCamera.position,{
            z: 2.9,
            y:1.3
            
        },)
      


          
        this.timeline2 = new GSAP.timeline({
            scrollTrigger: {
                trigger: ".second-move",
                

                start: "top top",
                end: "bottom bottom",
                scrub: 0.6,
                
        
                invalidateOnRefresh: true,
            },
          });
          this.timeline2.to(this.room.position,{
            y:6.2,
            z:-0.1,
            x:-0.4,
          
        },)
        this.timeline.to(this.camera.perspectiveCamera.position,{
            z: 1.9,
            y:1.3,
            x:0.5,
         
        }) 

// animating objects


        this.timeline3 = new GSAP.timeline({

            scrollTrigger: {
                trigger: ".part2move",

              
                start: "bottom bottom",
          
            },
        

    }).to(this.roomchildren.c10.scale,{
        x: 1.02186,
        z: 0.609305,
        y: 1.0,
        ease: "back.out(2)",
        duration: 0.3
    }).to(this.roomchildren.c1.scale,{
        x: 0.07052,
        z:-0.120511,
        y: -0.012042,
        ease: "back.out(2)",
        duration: 0.25
    },"same").to(this.roomchildren.c2.scale,{
        x: 0.07052,
        z:-0.120511 ,
        y: -0.012042,
        ease: "back.out(2)",
        duration: 0.25
    },"same").to(this.roomchildren.c3.scale,{
        x:0.070509 ,
        z:-0.107286,
        y: -0.012028,
        ease: "back.out(2)",
        duration: 0.25
    },"same").to(this.roomchildren.c4.scale,{
        x: -0.003983,
        z:-0.003983,
        y: -0.003983,
        ease: "back.out(2)",
        duration: 0.25
    },"same4").to(this.roomchildren.c5.scale,{
        x:0.264653,
        z:0.106919,
        y: 0.507543,
        ease: "back.out(2)",
        duration: 0.25
    },"same4").to(this.roomchildren.c6.scale,{
        x:0.252883,
        z:0.102165,
        y:0.484972,
        ease: "back.out(2)",
        duration: 0.25
    },"same4").to(this.roomchildren.c7.scale,{
        x: -0.577855,
        z: -0.577855,
        y:-0.042195,
        ease: "back.out(2)",
        duration: 0.25
    },"same").to(this.roomchildren.c8.scale,{
        x: 0.970559,
        z: 0.970559,
        y: 0.970559,
        ease: "back.out(2)",
        duration: 0.25
    },"same1").to(this.roomchildren.c9.scale,{
        x: 0.290131,
        z: 0.217516,
        y: 0.217516,
        ease: "back.out(2)",
        duration: 0.25
    },"same4").to(this.roomchildren.c11.scale,{
        x:0.236106 ,
                z: 0.176721,
                y:0.176721 ,
                ease: "back.out(2)",
                duration: 0.25
    },"same4").to(this.roomchildren.c12.scale,{
        x:0.016375 ,
        z:0.016375 ,
        y:0.016375 ,
        ease: "back.out(2)",
        duration: 0.25
    },"same4").to(this.roomchildren.c13.scale,{
        x: 0.38518,
        z:0.38518,
        y:0.38518,
        ease: "back.out(2)",
        duration: 0.25
    },"same1")
 
 
    // third section timeline
    
    this.timeline4 = new GSAP.timeline({

        scrollTrigger: {
            trigger: ".part3move",

          
            start: "bottom bottom",
      
        },
    

})
.to(this.roomchildren.t6.position,{
    x: -0.867575  ,
   
    duration: 0.5
},)
.to(this.roomchildren.t8.scale,{
    x:-0.503937,
    z:-0.309142 ,
    y: -0.309142,
    ease: "back.out(2)",
    duration: 0.25

})
.to(this.roomchildren.t1.scale,{
    x:0.116276 ,
    z:0.116276 ,
    y: 0.01717,
    ease: "back.out(2)",
    duration: 0.35

})
.to(this.roomchildren.t10.scale,{
    x:0.105973 ,
    z:0.105973 ,
    y:0.105973,
    ease: "back.out(2)",
    duration: 0.35
})
.to(this.roomchildren.t3.scale,{
    x:-0.165195 ,
    z:-0.008161 ,
    y:-0.211118,
    ease: "back.out(2)",
    duration: 0.35
},"same")
.to(this.roomchildren.t4.scale,{
    x:-0.104751 ,
    z:-0.006164,
    y:-0.133871,
    ease: "back.out(2)",
    duration: 0.35
},"same")
.to(this.roomchildren.t9.scale,{
    x:0.114932 ,
    z:0.114932,
    y:0.114932,
    ease: "back.out(2)",
    duration: 0.35
},)
.to(this.roomchildren.t2.scale,{
    x:0.035826,
    z:-0.061224,
    y:-0.006118,
    ease: "back.out(2)",
    duration: 0.35
},)
.to(this.roomchildren.t5.scale,{
    x:-0.297612 ,
    z:-0.297612,
    y:-0.021732,
    ease: "back.out(2)",
    duration: 0.35
},)


}

    resize() {

    }

    update() {

    }
}