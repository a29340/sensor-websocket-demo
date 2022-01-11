<template>
  <div id="app" class="">
    <section class="section" v-if="!showRoom">
      <div class="container box">
        <h1 class="title">Room settings</h1>
        <h2 class="subtitle">Create or enter a room.</h2>
        <b-field label="Room name" label-position="on-border">
          <b-input v-model="room"></b-input>
          <p class="control">
            <b-button type="is-primary is-light" @click="createRoom()">Create</b-button>
          </p>
        </b-field>
        <b-field label="Client" label-position="on-border">
          <b-input v-model="clientId"></b-input>
          <p class="control">
            <b-button type="is-primary is-light" @click="enterRoom()">Enter</b-button>
          </p>
        </b-field>
      </div>
    </section>
    <section class="section" v-if="showRoom">
        <RoomComponent :room-name="room" :client-id="clientId" v-on:leave="leaveRoom()"/>
    </section>
  </div>
</template>

<script>
import RoomComponent from "@/components/RoomComponent";
import WebsocketService from "@/services/WebsocketService";

export default {
  name: 'App',
  data: () => {
    return {
      room: '',
      clientId: '',
      showRoom: false,
      interval: undefined
    }
  },
  components: {
    RoomComponent
  },
  methods: {
    enterRoom() {
      const vue = this;
      const url = 'room/' + vue.$data.room + '/enter';
      const request = new Request(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: vue.$data.clientId,
          alpha: 0,
          beta: 0,
          gamma: 0
        })
      })
      fetch(request).then(response => {
        if (response.status === 200) {
          vue.$buefy.notification.open({
            message: 'Room entered.',
            type: 'is-success is-light'
          })
          vue.$data.showRoom = true;
          vue.$data.interval = setInterval(() => {
            WebsocketService.send({
              id: vue.$data.clientId,
              alpha: 0,
              beta: 0,
              gamma: 0
            })
          }, 1000)
        } else {
          console.log(response)
          vue.$buefy.notification.open({
            message: response.status,
            type: 'is-danger is-light'
          })
        }
      })
    },
    createRoom() {
      const vue = this;
      const url = 'room/' + this.$data.room;
      fetch(new Request(url), {
        method: 'POST'
      }).then(response => {
        if (response.status === 200) {
          vue.$buefy.notification.open({
            message: 'Room created.',
            type: 'is-success'
          })
        } else {
          vue.$buefy.notification.open({
            message: response.status,
            type: 'is-danger'
          })
        }
      })
    },
    leaveRoom() {
      const vue = this;
      const url = 'room/' + vue.$data.room + '/leave';
      const request = new Request(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: vue.$data.clientId,
          alpha: 0,
          beta: 0,
          gamma: 0
        })
      })
      fetch(request).then(response => {
        if (response.status === 200) {
          vue.$buefy.notification.open({
            message: 'Room leaved.',
            type: 'is-success is-light'
          })
          vue.$data.showRoom = false;
          clearInterval(vue.$data.interval)
        } else {
          console.log(response)
          vue.$buefy.notification.open({
            message: response.status,
            type: 'is-danger is-light'
          })
        }
      })
    }
  }
}
</script>

<style>
#app {
}
</style>
