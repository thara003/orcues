import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
} from "@tremor/react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const users = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    username: "janedoe",
    email: "janedoe@example.com",
  },
  {
    id: 3,
    name: "Bob Smith",
    username: "bobsmith",
    email: "bobsmith@example.com",
  },
];

export default async function UsersTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Username</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>
              <Text>{user.username}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.email}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
