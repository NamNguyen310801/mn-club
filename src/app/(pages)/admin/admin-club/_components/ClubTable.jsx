"use client";
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DeleteAlertDialog from "@/components/_personal/DeleteAlertDialog";
export default function ClubTable() {
  const [club, setClub] = useState();
  const columns = [
    {
      name: "id",
      label: "NO",
    },
    {
      name: "email",
      label: "Tên Viết Tắt",
    },
    {
      name: "age",
      label: "Tên Câu Lạc Bộ",
    },
    {
      name: "firstName",
      label: "Chủ nhiệm",
    },

    {
      name: "lastName",
      label: "Loại Câu Lạc Bộ",
    },
    {
      name: "lastName",
      label: "Ngày thành Lập",
    },
    {
      name: "lastName",
      label: "Số Lượng Thành Viên",
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
        download: false,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="flex items-center justify-between px-4">
              {/* <EditUserDialog dataRow={data[tableMeta?.rowIndex]} /> */}
              <DeleteAlertDialog
                onClick={() => handleDelete(tableMeta?.rowIndex)}
              />
            </div>
          );
        },
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

  const handleDelete = (rowIndex) => {
    const rowData = data[rowIndex];
    console.log("Delete action for row: ", rowData);
  };
  return (
    <div className="w-full h-full">
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
