package com.a29340.sensorwebsocketdemo.controller;

import com.a29340.sensorwebsocketdemo.model.Client;
import com.a29340.sensorwebsocketdemo.model.Room;
import com.a29340.sensorwebsocketdemo.service.RoomService;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class RoomController {
  private final RoomService service;
  private final WebsocketController websocketController;

  public RoomController(RoomService service,
      WebsocketController websocketController) {
    this.service = service;
    this.websocketController = websocketController;
  }

  @PostMapping("/room/{name}/enter")
  public ResponseEntity enterRoom(@PathVariable("name") String roomName, @RequestBody Client client) {
    this.service.addClientToRoom(client, roomName);
    return ResponseEntity.ok().build();
  }

  @PostMapping("/room/{name}/leave")
  public ResponseEntity leaveRoom(@PathVariable("name") String roomName, @RequestBody Client client)
      throws Exception {
    Room updatedRoom = this.service.removeClientFromRoom(client, roomName);
    this.websocketController.sendRoomUpdate(updatedRoom);
    return ResponseEntity.ok().build();
  }
  
  @DeleteMapping("/room/{name}")
  public ResponseEntity deleteRoom(@PathVariable("name") String name) {
    this.service.deleteRoom(name);
    return ResponseEntity.ok().build();
  }

  @PostMapping("/room/{name}")
  public ResponseEntity createRoom(@PathVariable("name") String name) {
    this.service.createRoom(name);
    return ResponseEntity.ok().build();
  }
  
  
}
