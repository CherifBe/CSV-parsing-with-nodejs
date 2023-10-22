import { Alert, LinearProgress } from "@mui/material";
import * as React from "react";
import * as Api from "../routes/Api";
import { Room } from "../models/Models";
import RoomTable from "./RoomTable";

interface SensorResultProps {
  roomId: string;
}

const Measures = ({ roomId }: SensorResultProps) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [room, setRoom] = React.useState<Room[] | undefined>();
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  React.useEffect(() => {
    
    Api.getRoom({
      roomId,
      onSuccess: (res) => {
        setRoom(res.data.flat(1));
        setIsLoading(false);
        setErrorMessage("");
      },
      onFailure: (err) => {
        setErrorMessage("La room n'a pas pu être récupérée.");
        setIsLoading(false);
      },
    });
  }, [roomId]);

  return isLoading ? (
    <LinearProgress />
  ) : (
    <>{!!errorMessage.length && <Alert severity="error">{errorMessage}</Alert>}
    {!!room && <RoomTable room={room}/>}
    </>
  );
};

export default Measures;
