export type Rooms = string[];

export interface Room {
  "@timestamp": string;
  brand: string;
  establishment_address: string;
  establishment_city: string;
  establishment_id: string;
  establishment_latitude: string;
  establishment_longitude: string;
  establishment_name: string;
  establishment_postcode: string;
  measure_float: string;
  measure_type: string;
  room_id: string;
  room_name: string;
  serial_number: string;
};

export interface RoomsApi {
  onSuccess: (rooms: {
    data: {
      rooms: Rooms;
    };
  }) => void;
  onFailure: (err: any) => void;
}

export interface RoomApi {
  onSuccess: (room: { data: Room[] }) => void;
  onFailure: (err: any) => void;
  roomId: string;
}
