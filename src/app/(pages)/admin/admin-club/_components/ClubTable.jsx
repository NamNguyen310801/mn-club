"use client";
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
export default function ClubTable() {
  const [club, setClub] = useState();
  const columns = [
    {
      name: "id",
      label: "Id",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "age",
      label: "Age",
    },
    {
      name: "firstName",
      label: "FirstName",
    },
    {
      name: "image",
      label: "Avatar",
      options: {
        customBodyRender: (value) => (
          <img
            src={value}
            alt="avatar"
            className="w-12 h-12 rounded-full overflow-hidden bg-center bg-cover"
          />
        ),
        filter: false,
      },
    },

    {
      name: "lastName",
      label: "LastName",
    },
    {
      name: "role",
      label: "Role",
      options: {
        customBodyRender: (value) => <p className="">{value}</p>,
      },
    },
    {
      name: "action",
      label: "Action",
      options: {
        customBodyRender: (value) => <div className="cursor-pointer">edit</div>,
        filter: false,
        download: false,
      },
    },
  ];

  const data = [
    {
      id: 1,
      firstName: "Emily",
      lastName: "Johnson",
      maidenName: "Smith",
      age: 28,
      gender: "female",
      email: "emily.johnson@x.dummyjson.com",
      phone: "+81 965-431-3024",
      username: "emilys",
      password: "emilyspass",
      birthDate: "1996-5-30",
      image:
        "https://images.unsplash.com/photo-1718073725822-96f864f08837?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bloodGroup: "O-",
      height: 193.24,
      weight: 63.16,
      role: "admin",
    },
    {
      id: 2,
      firstName: "Emlily",
      lastName: "Johnson",
      maidenName: "Smith",
      age: 28,
      gender: "female",
      email: "emily.johnson@x.dummyjson.com",
      phone: "+81 965-431-3024",
      username: "emilys",
      password: "emilyspass",
      birthDate: "1996-5-30",
      image:
        "https://images.unsplash.com/photo-1718073725822-96f864f08837?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bloodGroup: "O-",
      height: 193.24,
      weight: 63.16,
      role: "admin",
    },
    {
      id: 3,
      firstName: "Amily",
      lastName: "Johnson",
      maidenName: "Smith",
      age: 28,
      gender: "female",
      email: "emily.johnson@x.dummyjson.com",
      phone: "+81 965-431-3024",
      username: "emilys",
      password: "emilyspass",
      birthDate: "1996-5-30",
      image:
        "https://images.unsplash.com/photo-1718152220071-dc4396f654fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bloodGroup: "O-",
      height: 193.24,
      weight: 63.16,
      role: "admin",
    },
  ];
  const options = {
    selectableRows: "none",
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 25],
  };
  const getMuiTheme = () =>
    createTheme({
      palette: {
        background: {
          paper: "#383F51",
        },
        mode: "dark",
      },
      components: {
        MuiTableCell: {
          styleOverrides: {
            head: {
              padding: "10px 16px",
            },
            body: {
              padding: "10px 16px",
            },
          },
        },
      },
    });
  return (
    <div className="w-full h-full">
      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"Club List"}
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </div>
  );
}
