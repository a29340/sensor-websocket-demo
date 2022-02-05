<template>
  <div class="card m-3">
    <header class="card-header has-background-primary">
      <p class="card-header-title has-text-primary-light">{{client.id}}</p>
    </header>
    <div class="card-content has-background-primary-light	">
      <div class="content" ref="webglviewer">
<!--        <div class="is-flex is-justify-content-space-between">-->
<!--          <div>α:</div>-->
<!--          <div>{{client.alpha}}</div>-->
<!--        </div>-->
<!--        <div class="is-flex is-justify-content-space-between">-->
<!--          <div>β:</div>-->
<!--          <div>{{client.beta}}</div>-->
<!--        </div>-->
<!--        <div class="is-flex is-justify-content-space-between">-->
<!--          <div>γ:</div>-->
<!--          <div>{{client.gamma}}</div>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";

export default {
  name: "ClientComponent",
  props: ['client'],
  data: () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 500 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( 250, 250 );
    const geometry = new THREE.BoxGeometry(0.5,1,0.2);
    const material = new THREE.MeshStandardMaterial({
      side: THREE.FrontSide,
      color: 'hsl(0, 100%, 50%)',
      wireframe: false
    });
    const axes = new THREE.AxesHelper(5)

    const light = new THREE.DirectionalLight('hsl(0, 100%, 100%)')
    light.position.set(0, 0, 10)
    const cube = new THREE.Mesh( geometry, material );
    scene.add(cube);
    scene.add(light);
    scene.add(axes);
    camera.position.z = 5;
    let animate = function () {

    }
    return {
      scene,
      camera,
      renderer,
      geometry,
      light,
      material,
      cube,
      animate
    }
  },
  created() {
    const vue = this;
    vue.$data.animate = () => {
      requestAnimationFrame( vue.$data.animate );
      vue.$data.cube.rotation.x = vue.$props.client.alpha;
      vue.$data.cube.rotation.y = vue.$props.client.beta;
      vue.$data.renderer.render( vue.$data.scene, vue.$data.camera );
    }
  },
  mounted() {
    this.$refs.webglviewer.appendChild(this.$data.renderer.domElement);
    this.$data.animate();
  }
}
</script>

<style scoped>
.card {
  min-width: 25vw;
}
</style>