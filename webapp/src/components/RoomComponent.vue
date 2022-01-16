<template>
  <div class="container box">
    <h1 class="title">{{ roomName }}</h1>
    <h2 class="subtitle">Display the room's clients and their state.</h2>
    <h2 class="subtitle">You are the client {{ clientId }}</h2>
    <div class="is-flex is-flex-direction-column is-justify-content-center">
      <div class="is-flex is-flex-wrap-wrap">
        <client-component v-for="client of clients" v-bind:key="client.id" :client="client"></client-component>
      </div>
      <b-button type="is-primary is-light" class="m-3" @click="leaveRoom()">Leave Room</b-button>
    </div>
  </div>
</template>

<script>
import ClientComponent from "@/components/ClientComponent";
import WebsocketService from "@/services/WebsocketService";
import {Accelerometer} from "motion-sensors-polyfill";

export default {
  name: "RoomComponent",
  props: {
    roomName: String,
    clientId: String
  },
  emits: ['leave'],
  data: () => {
    return {
      clients: [],
      sensor: {}
    }
  },
  mounted() {
    const vue = this;
    WebsocketService.connect(
        '/topic/room/' + this.$props.roomName,
        () => {
          this.$buefy.notification.open({
            message: `Websocket connected to room ${this.$props.roomName}`,
            type: 'is-success is-light'
          })
          try {
            vue.$data.sensor = new Accelerometer({frequency: 30});
            vue.$data.sensor.addEventListener('error', event => {
              // Handle runtime errors.
              if (event.error.name === 'NotAllowedError') {
                // Branch to code for requesting permission.
              } else if (event.error.name === 'NotReadableError') {
                vue.notifyError('Cannot connect to the sensor.');
              }
            });
            vue.$data.sensor.addEventListener('reading', () => {
                  WebsocketService.send({
                    id: vue.$props.clientId,
                    alpha: vue.$data.sensor.y,
                    beta: vue.$data.sensor.x,
                    gamma: vue.$data.sensor.z
                  })
                }
            );
            vue.$data.sensor.start();
          } catch (error) {
            // Handle construction errors.
            if (error.name === 'SecurityError') {
              // See the note above about feature policy.
              vue.notifyError('Sensor construction was blocked by a feature policy.');
            } else if (error.name === 'ReferenceError') {
              vue.notifyError('Sensor is not supported by the User Agent.');
            } else {
              throw error;
            }
          }
        },
        (message) => {
          this.$data.clients = message.clients;
        },
        (error) => {
          this.notifyError(`Websocket error: ${error}`)
        })
  },
  components: {ClientComponent},
  methods: {
    leaveRoom() {
      if (this.$data.sensor.stop) {
        this.$data.sensor.stop();
      }
      WebsocketService.disconnect(() => console.log('disconnected websocket'))
      this.$emit('leave')
    },
    notifyError(message) {
      this.$buefy.notification.open({
        message: message,
        type: 'is-danger is-light'
      })
    }
  }
}
</script>

<style scoped>

</style>