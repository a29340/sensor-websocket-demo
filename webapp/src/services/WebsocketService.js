import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

class WebsocketService {
  client = undefined;
  socket = undefined;
  connected = false;
  connect(topic, onConnect, onReceive, onError) {
    this.socket = new SockJS("sensors");
    this.client = Stomp.over(this.socket);
    this.client.connect(
      {},
      () => {
        this.connected = true;
        onConnect();
        this.client.subscribe(topic , tick => {
          onReceive(JSON.parse(tick.body));
        });
      },
      error => {
        console.log(error);
        this.connected = false;
        onError();
      }
    );
  }

  disconnect(onDisconnect) {
    if (this.client) {
      this.client.disconnect();
    }
    this.connected = false;
    onDisconnect();
  }

  send(message) {
    if (this.client && this.client.connected) {
      this.client.send("/app/sensors", JSON.stringify(message))
    }
  }
}

export default new WebsocketService();