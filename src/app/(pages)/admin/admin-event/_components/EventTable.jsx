import { ThemeProvider, createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import EditEventDialog from "./EditEventDialog";
import DeleteAlertDialog from "@/components/_personal/DeleteAlertDialog";

export default function EventTable({ eventList, onDelete }) {
  const getRole = (role) => {
    if (role === 1) return "admin";
    else if (role == 2) return "manage";
    else if (role == 3) return "basic";
    else return "guest";
  };
  const columns = [
    {
      name: "eventID",
      label: "NO",
    },

    {
      name: "name",
      label: "Tên Sự Kiện",
    },
    {
      name: "approveStatus",
      label: "Trạng Thái Duyệt",
    },
    {
      name: "startDate",
      label: "Thời Gian Bắt Đầu",
      options: {
        customBodyRender: (value) => (
          <div className="text-wrap max-w-20">
            {moment(value).format("DD/MMM/yyy")}
          </div>
        ),
      },
    },
    {
      name: "endDate",
      label: "Thời Gian Kết Thúc",
      options: {
        customBodyRender: (value) => (
          <div className="text-wrap max-w-20">
            {moment(value).format("DD/MMM/yyy")}
          </div>
        ),
      },
    },
    {
      name: "location",
      label: "Địa Điểm",
    },
    {
      name: "clubName",
      label: "Đơn Vị Tổ Chức",
    },
    {
      name: "eventTypeId",
      label: "Loại Sự Kiện",
    },
    {
      name: "status",
      label: "Trạng thái",
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
              <EditEventDialog dataRow={data[tableMeta?.rowIndex]} />
              <DeleteAlertDialog
                onClick={() => handleDelete(tableMeta?.rowIndex)}
              />
            </div>
          );
        },
      },
    },
  ];
  const handleDelete = async (rowIndex) => {
    const rowData = data[rowIndex];
    await onDelete(rowData);
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
          data={eventList || []}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </div>
  );
}
