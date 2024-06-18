"use client";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";

export default function EventTable() {
  const [rowId, setRowId] = useState(null);
  const getRole = (role) => {
    if (role === 1) return "admin";
    else if (role == 2) return "manage";
    else if (role == 3) return "basic";
    else return "guest";
  };
  const data = [
    {
      id: 1,
      lastName: "Johnson",
      student_code: "aaas",
    },
    {
      id: 2,
      lastName: "Johnson",
      student_code: "asd",
    },
  ];
  const columns = [
    {
      name: "id",
      label: "NO",
    },

    {
      name: "lastName",
      label: "Tên Sự Kiện",
    },
    {
      name: "student_code",
      label: "Trạng Thái Duyệt",
    },
    {
      name: "student_code",
      label: "Thời Gian",
      options: {
        customBodyRender: (value) => <div>{value}</div>,
      },
    },
    {
      name: "student_code",
      label: "Địa Điểm",
    },
    {
      name: "student_code",
      label: "Đơn Vị Tổ Chức",
    },
    {
      name: "student_code",
      label: "Loại Sự Kiện",
    },
    {
      name: "enable",
      label: "Trạng thái",
      options: {
        customBodyRender: (value) => <div>{value ? "Active" : "Inactive"}</div>,
      },
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
  const options = {
    selectableRows: "none",
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 25],
    download: false,
    print: false,
    viewColumns: false,
    elevation: 0,
  };
  const getMuiTheme = () =>
    createTheme({
      palette: {
        mode: "light",
      },
      components: {
        MUIDataTable: {
          styleOverrides: {
            tableRoot: {
              borderRadius: "6px 6px 0 0",
              overflow: "hidden",
            },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            root: {
              backgroundColor: "#FFE4C4",
            },
            head: {
              padding: "10px 16px",
            },
            body: {
              padding: "10px 16px",
              backgroundColor: "#FFE4C4",
              fontSize: 16,
            },
          },
        },
        MUIDataTableHeadCell: {
          styleOverrides: {
            fixedHeader: {
              backgroundColor: "#A9A9A9",
            },
            toolButton: {
              fontSize: 18,
              fontWeight: 600,
            },
          },
        },
        MuiTablePagination: {
          styleOverrides: {
            selectLabel: {
              display: "none",
            },
          },
        },
      },
    });
  return (
    <div className="w-full">
      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={""}
          data={data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </div>
  );
}
