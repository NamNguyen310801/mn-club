"use client";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import EditUserDialog from "./EditUserDialog";
import DeleteAlertDialog from "@/components/_personal/DeleteAlertDialog";
export default function UserTable({ userList }) {
  const [rowId, setRowId] = useState(null);
  const getRole = (role) => {
    if (role === 1) return "admin";
    else if (role == 2) return "manage";
    else if (role == 3) return "basic";
    else return "guest";
  };
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
  const data = [
    {
      id: 1,
      username: "Emily",
      lastName: "Johnson",
      student_code: "aaas",
      email: "asdas.johnson@x.dummyjson.com",
      phone_number: "0333460843",
      enable: false,
      password: "aaasdasd",
    },
    {
      id: 2,
      username: "Emlily",
      lastName: "Johnson",
      student_code: "asd",
      email: "emily.johnson@x.dummyjson.com",
      phone_number: "0235460844",
      enable: true,
      password: "aaasdasd",
      avatar:
        "https://images.unsplash.com/photo-1712847333437-f9386beb83e4?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const columns = [
    {
      name: "id",
      label: "NO",
    },
    {
      name: "username",
      label: "Tên Đăng Nhập",
    },
    {
      name: "lastName",
      label: "Họ Và Tên",
    },
    {
      name: "student_code",
      label: "Mã Sinh Viên",
      options: {
        customBodyRender: (value) => (
          <div>
            <span className="uppercase">{value?.slice(0, 2)}</span>
            xxxxx
          </div>
        ),
      },
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "phone_number",
      label: "Số Điện Thoại",
      options: {
        customBodyRender: (value) => (
          <div>
            {value?.slice(0, 3)}
            xxxx
            {value?.slice(7, 10)}
          </div>
        ),
      },
    },
    {
      name: "enable",
      label: "Trạng thái",
      options: {
        customBodyRender: (value) => <div>{value ? "Active" : "Inactive"}</div>,
        filter: true,
        filterType: "dropdown",
        filterOptions: {
          names: ["Active", "Inactive"],
          logic: (enable, filterVal) => {
            if (filterVal.length > 0) {
              return (filterVal.includes("Active") && enable) ||
                (filterVal.includes("Inactive") && !enable)
                ? false
                : true;
            }
            return false;
          },
        },
        customFilterListOptions: {
          render: (value) => {
            if (value === true) return "Active";
            if (value === false) return "Inactive";
            return value;
          },
        },
      },
    },
    {
      name: "",
      label: "",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="flex items-center justify-between px-4">
              <EditUserDialog dataRow={data[tableMeta?.rowIndex]} />
              <DeleteAlertDialog
                onClick={() => handleDelete(tableMeta?.rowIndex)}
              />
            </div>
          );
        },
      },
    },
  ];
  const handleDelete = (rowIndex) => {
    const rowData = data[rowIndex];
    console.log("Delete action for row: ", rowData);
  };

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
              fontSize: 16,
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
