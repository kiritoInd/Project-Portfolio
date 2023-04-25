import Experience from "./Experience.js";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"


export default class Camera {
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.createPerspectiveCamera();
        this.createOrthographicCamera();
        this.setOrbitControl();
      

  
    }


     
 
    createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35,
            this.sizes.aspect,
            0.1,
            1000
        );
        this.scene.add(this.perspectiveCamera)
        this.perspectiveCamera.position.z = 8
    }
    createOrthographicCamera() {
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum) / 2,
            (this.sizes.aspect * this.sizes.frustrum) / 2,
            this.sizes.frustrum / 2,
            -this.sizes.frustrum / 2,
            -100,
            100
        )
        // this.orthographicCamera.position.y = 2.3;
        // this.orthographicCamera.position.x = -2;
        // this.orthographicCamera.rotation.z = -Math.PI / 6;

        // this.scene.add(this.orthographicCamera)
        // this.orthographicCamera.lookAt(new THREE.Vector3(0, 0, 0));


        // this.helper = new THREE.CameraHelper(this.orthographicCamera)
        // this.scene.add(this.helper)
        // const size = 10;
        // const divisions = 10;

        // const gridHelper = new THREE.GridHelper(size, divisions);
        // this.scene.add(gridHelper);

        // const axesHelper = new THREE.AxesHelper(1);
        // this.scene.add(axesHelper);

    }

    resize() {
        //update perspective camera resize
        this.perspectiveCamera.aspect = this.sizes.aspect
        this.perspectiveCamera.updateProjectionMatrix();

        //UPDATE orthographic camera on resize
        this.orthographicCamera.left = (-this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.right = (this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.top = this.sizes.frustrum / 2;
        this.orthographicCamera.bottom = -this.sizes.frustrum / 2;
        this.orthographicCamera.updateProjectionMatrix();

    }
    setOrbitControl() {
        this.control = new OrbitControls(this.perspectiveCamera, this.canvas)
        this.control.enableDamping = true;
        // this.control.enableZoom = true;
    }

    update() {
        this.control.update();

        // this.helper.matrixWorldNeedsUpdate = true;
        // this.helper.update();

        // this.helper.position.copy(this.orthographicCamera.position)
        // this.helper.rotation.copy(this.orthographicCamera.rotation)

    }
}