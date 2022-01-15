package com.a29340.sensorwebsocketdemo.controller;

import com.a29340.sensorwebsocketdemo.model.Client;
import com.a29340.sensorwebsocketdemo.model.Room;
import com.a29340.sensorwebsocketdemo.service.RoomService;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import lombok.extern.java.Log;

import java.util.Objects;

@Log
@Controller
public class WebsocketController {

  private final SimpMessagingTemplate template;
  private final RoomService roomService;

  public WebsocketController(SimpMessagingTemplate template,
      RoomService roomService) {
    this.template = template;
    this.roomService = roomService;
  }

  public void sendRoomUpdate(Room room) throws Exception {
    log.info(String.format("Sending message to room %s", room.getName()));
    template.convertAndSend("/topic/room/" + room.getName(), room);
  }

  @MessageMapping("/sensors")
  public void receive(Client clientUpdate)  throws Exception {
    log.info(String.format("Received clientUpdate from %s", clientUpdate.getId()));
    Room updatedRoom = this.roomService.updateRoom(clientUpdate);
    if (Objects.nonNull(updatedRoom)) sendRoomUpdate(updatedRoom);
  }
}