#!/usr/bin/node
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const num = [19, 20, 34]
  const rooms = [];
  for (let i = 0; i < num.length; i += 1) {
    rooms.push(new ClassRoom(num[i]));
  }
  return rooms;
}