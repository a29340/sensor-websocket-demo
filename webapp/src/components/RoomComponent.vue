<template>
  <div class="container box">
    <h1 class="title">{{ roomName }}</h1>
    <h2 class="subtitle">Display the room's clients and their state.</h2>
    <h2 class="subtitle">You are the client {{clientId}}</h2>
    <div class="is-flex is-flex-direction-column is-justify-content-center">
      <div class="is-flex is-flex-wrap-wrap">
        <client-component v-for="client of clients" v-bind:key="client.id" :client="client"></client-component>
      </div>
      <b-button type="is-primary is-light" @click="leaveRoom()">Leave Room</b-button>
    </div>
  </div>
</template>

<script>
import ClientComponent from "@/components/ClientComponent";
import WebsocketService from "@/services/WebsocketService";

export default {
  name: "RoomComponent",
  props: {
    roomName: String,
    clientId: String
  },
  emits:['leave'],
  data: () => {
    return {
      clients: []
    }
  },
  mounted() {
    WebsocketService.connect(
        '/topic/room/' + this.$props.roomName,
        () => {
          this.$buefy.notification.open({
            message: `Websocket connected to room ${this.$props.roomName}`,
            type: 'is-success is-light'
          })
        },
        (message) => {
          this.$data.clients = message.clients;
        },
        (error) => {
          this.$buefy.notification.open({
            message: `Websocket error: ${error}`,
            type: 'is-danger is-light'
          })
        })
  },
  components: {ClientComponent},
  methods: {
    leaveRoom() {
      this.$emit('leave')
    }
  }
}
</script>

<style scoped>

</style>