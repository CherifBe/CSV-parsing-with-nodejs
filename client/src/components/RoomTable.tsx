import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Room } from "../models/Models";

interface RoomTableProps {
  room: Room[];
}

const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

const RoomTable = ({ room }: RoomTableProps) => {
  return (
    <TableContainer>
      <Table aria-label="room-measures" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Adresse</TableCell>
            <TableCell>Latitude</TableCell>
            <TableCell>Longitude</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Numéro de série</TableCell>
            <TableCell>Date et heure</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            room.map((row) => {
              return (
              <TableRow
                key={row.room_name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.establishment_address}</TableCell>
                <TableCell>{row.establishment_latitude}</TableCell>
                <TableCell>{row.establishment_longitude}</TableCell>
                <TableCell>{row.measure_float}</TableCell>
                <TableCell>{row.measure_type}</TableCell>
                <TableCell>{row.serial_number}</TableCell>
                <TableCell>{formatDate(row['@timestamp'])}</TableCell>
              </TableRow>
            )})
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RoomTable;
