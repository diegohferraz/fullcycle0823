import { io } from "socket.io-client";

export const socket = io('http://localhost:3000', {
  autoConnect: false, //Serve para desabilitar o comportamento padrao de conectar quando iniciar
});