<template>
  <div class="card m-3">
    <header class="card-header has-background-primary">
      <p class="card-header-title has-text-primary-light">{{client.id}}</p>
    </header>
    <div class="card-content has-background-primary-light	">
      <div class="content">
        <div class="is-flex is-justify-content-space-between">
          <div>α:</div>
          <div>{{client.alpha}}</div>
        </div>
        <div class="is-flex is-justify-content-space-between">
          <div>β:</div>
          <div>{{client.beta}}</div>
        </div>
        <div class="is-flex is-justify-content-space-between">
          <div>γ:</div>
          <div>{{client.gamma}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientComponent",
  props: {
    client: {}
  }
}
</script>

<style scoped>
.card {
  min-width: 25vw;
}
</style>