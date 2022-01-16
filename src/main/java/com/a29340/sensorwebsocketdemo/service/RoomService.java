package com.a29340.sensorwebsocketdemo.service;

import com.a29340.sensorwebsocketdemo.model.Client;
import com.a29340.sensorwebsocketdemo.model.Room;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

@Service
public class RoomService {

  private Map<String, Room> roomsByName = new HashMap<>();
  private Map<String, String> roomNamesByClientId = new HashMap<>();

  public void addClientToRoom(Client client, String roomName) {
    Room room = this.roomsByName.get(roomName);
    room.getClients().add(client);
    this.roomNamesByClientId.put(client.getId(), roomName);
  }

  public Room removeClientFromRoom(Client client, String roomName) {
    Room room = this.roomsByName.get(roomName);
    Set<Client> clients = room.getClients();
    Optional<Client> first = clients.stream().filter(c -> c.getId().equals(client.getId())).findFirst();
    clients.remove(first.get());
    return room;
  }

  public Room createRoom(String roomName) {
    return this.roomsByName.put(roomName,
        Room.builder().name(roomName).clients(new HashSet<>()).build());
  }

  public void deleteRoom(String roomName) {
    this.roomsByName.remove(this.roomsByName.get(roomName));
  }

  public Room getClientRoom(String clientId) {
    return this.roomsByName.get(this.roomNamesByClientId.get(clientId));
  }

  public Room updateRoom(Client clientUpdate) {
    Room room = this.getClientRoom(clientUpdate.getId());
    if (Objects.nonNull(room)) {
      Client client = room.getClients()
          .stream().filter(c -> c.getId().equals(clientUpdate.getId())).findAny().get();
      client.setAlpha(clientUpdate.getAlpha());
      client.setBeta(clientUpdate.getBeta());
      client.setGamma(clientUpdate.getGamma());
    }
    return room;
  }
}
