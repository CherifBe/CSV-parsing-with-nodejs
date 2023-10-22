import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";
import * as Api from "../routes/Api";
import SensorResult from "./Measures";
import { Rooms } from "../models/Models";

const RoomList = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [rooms, setRooms] = React.useState<Rooms | undefined>();
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  React.useEffect(() => {
    Api.getRooms({
      onSuccess: (res) => {
        setRooms(res.data.rooms);
        setIsLoading(false);
        setErrorMessage("");
      },
      onFailure: (err) => {
        setErrorMessage("Les rooms n'ont pas pu être récupérées.");
        setIsLoading(false);
      },
    });
  }, []);

  return isLoading ? (
    <Stack direction={"row"} justifyContent={"center"}>
      <CircularProgress />
    </Stack>
  ) : (
    <Stack
      sx={{ mx: "auto" }}
      width={{
        xs: "100%",
        md: "80%",
      }}
    >
      {!!errorMessage.length && <Alert severity="error">{errorMessage}</Alert>}
      {!!rooms?.length &&
        rooms.map((roomId) => (
          <Accordion key={roomId}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="measures-content"
              id="measures-header"
            >
              <Typography>Room {roomId}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <SensorResult roomId={roomId} />
            </AccordionDetails>
          </Accordion>
        ))}
    </Stack>
  );
};

export default RoomList;
