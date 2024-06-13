"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { useSelector } from "react-redux";
export default function Achievements() {
  const achievementList = useSelector(
    (state) => state.achievement.achievementList
  );

  const columns = [
    {
      name: "id",
      label: "Id",
    },
    {
      name: "email",
      label: "Tên",
    },
    {
      name: "age",
      label: "Loại",
    },
    {
      name: "firstName",
      label: "Thông tin chi tiết",
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
    },
    {
      id: 2,
      firstName: "Emlily",
      lastName: "Johnson",
      maidenName: "Smith",
      email: "emily.johnson@x.dummyjson.com",
      age: 28,
    },
    {
      id: 3,
      firstName: "Amily",
      lastName: "Johnson",
      maidenName: "Smith",
      age: 28,
      gender: "female",
      email: "emily.johnson@x.dummyjson.com",
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
    <div className="container flex flex-col min-h-screen gap-y-4">
      <h2 className="text-center text-[20px] md:text-[26px] uppercase mb-0 font-bold mt-10 lg:mt-20">
        Danh sách thành tích
      </h2>
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
    </div>
  );
}
