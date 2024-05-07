"use client";

import { io } from 'socket.io-client';

import {
  ClientToServerEvents,
  ServerToClientEvents,
} from '@/types/socket-io.types.d';

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();
