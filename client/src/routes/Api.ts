import axios from "axios";
import * as Config from "./Config";
import { RoomApi, RoomsApi } from "../models/Models";

export const getRooms = async ({onSuccess, onFailure}: RoomsApi) => {
    try {
        const url = Config.API_URL + Config.GET_ROOMS;
        const rooms = await axios(url, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            }
        });
        onSuccess(rooms);
    }
    catch(err) {
        onFailure(err);
    }
}

export const getRoom = async ({roomId, onSuccess, onFailure}: RoomApi) => {
    try {
        const url = Config.API_URL + Config.GET_ROOM;
        const room = await axios(url, {
            method: "get",
            params: {
                room: roomId
            },
            headers: {
                "Content-Type": "application/json",
            },
        });
        onSuccess(room);
    }
    catch (err) {
        onFailure(err);
    }
}