"use client";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Avatar } from "@mui/material";
export default function UserTable() {
  const [rowId, setRowId] = useState(null);
  const getRole = (role) => {
    if (role === 1) return "admin";
    else if (role == 2) return "manage";
    else if (role == 3) return "basic";
    else return "guest";
  };
  const data = {
    user_id: "",
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    address: "",
    phone_number: "",
    avatar: "",
    student_code: "",
    description: "",
    enable: true,
  };
  const columns = [
    { field: "user_id", headerName: "Id", width: 80 },
    {
      field: "role",
      headerName: "Role",
      width: 100,
      type: "singleSelect",
      renderCell: (params) => (
        <div className="w-full capitalize flex items-center justify-start">
          {getRole(params?.row?.role)}
        </div>
      ),
      valueOptions: [
        { name: "basic", value: 1 },
        { name: "manage", value: 2 },
        { name: "admin", value: 3 },
        { name: "guest", value: 4 },
      ],
      editable: true,
    },
    { field: "username", headerName: "UserName", width: 150 },
    { field: "email", headerName: "Email", width: 220 },
    { field: "first_name", headerName: "First Name", width: 100 },
    { field: "last_name", headerName: "Last Name", width: 100 },
    { field: "phone_number", headerName: "Phone Number", width: 130 },

    {
      field: "avatar",
      headerName: "Avatar",
      renderCell: (params) => <Avatar src={params?.row?.avatar} />,
      sortable: false,
      filterable: false,
    },

    { field: "student_code", headerName: "Student Code", width: 100 },
    { field: "description", headerName: "Description", width: 150 },
    {
      field: "enable",
      headerName: "Enable",
      width: 100,
      type: "boolean",
      editable: true,
    },

    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      renderCell: (params) => <div>edit</div>,
    },
  ];
  const rows = [
    {
      user_id: 1,
      username: "asd",
      email: "Jon@gmail.com",
      first_name: "Nguyen",
      last_name: "Dat",
      address: "Ha Noi",
      phone_number: "0235460844",
      avatar: "",
      student_code: "NKKJJF704",
      description: "Lorem aksldah asbngj mafo",
      enable: true,
      role_id: 4,
    },
  ];
  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
      }}>
      <h2 className="w-full text-center py-4 text-xl font-bold text-blue-600 border-t-2">
        User List
      </h2>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        getRowId={(row) => row.user_id}
        pageSizeOptions={[5, 10, 15]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
