import { ThemeProvider, createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import EditEventDialog from "./EditEventDialog";
import DeleteAlertDialog from "@/components/_personal/DeleteAlertDialog";
import moment from "moment";
import ViewEventDialog from "./ViewEventDialog";

export default function EventTable({ eventList, onDelete }) {
  const getApprove = (approve) => {
    if (approve === "pending") return "Chờ duyệt";
    else if (approve === "approved") return "Đã duyệt";
    else if (approve === "reject") return "Từ chối";
  };
  const columns = [
    {
      name: "name",
      label: "Tên Sự Kiện",
      options: {
        filter: false,
      },
    },
    {
      name: "approveStatus",
      label: "Trạng Thái Duyệt",
      options: {
        customBodyRender: (value) => (
          <div className="text-wrap max-w-20 capitalize">
            {getApprove(value?.toLowerCase())}
          </div>
        ),
        // filter: true,
        // filterType: "dropdown",
        // filterOptions: {
        //   names: ["Chờ duyệt", "Đã duyệt", "Từ chối"],
        //   logic: (enable, filterVal) => {
        //     if (filterVal.length > 0) {
        //       return (filterVal.includes("pending") && enable) ||
        //         (filterVal.includes("approved") && !enable) ||
        //         filterVal.includes("reject")
        //         ? false
        //         : true;
        //     }
        //     return false;
        //   },
        // },
        // customFilterListOptions: {
        //   render: (value) => {
        //     if (value === "Chờ duyệt") return "Chờ duyệt";
        //     if (value === "Đã duyệt") return "Đã duyệt";
        //     if (value === "Từ chối") return "Từ chối";
        //     return value;
        //   },
        // },
      },
    },

    {
      name: "startDate",
      label: "Bắt Đầu",
      options: {
        customBodyRender: (value) => (
          <div className="text-wrap max-w-20">
            {moment(value).format("DD/MM/yyy")}
          </div>
        ),
        filter: false,
      },
    },
    {
      name: "endDate",
      label: "Kết Thúc",
      options: {
        customBodyRender: (value) => (
          <div className="text-wrap max-w-20">
            {moment(value).format("DD/MM/yyy")}
          </div>
        ),
        filter: false,
      },
    },
    {
      name: "location",
      label: "Địa Điểm",
      options: {
        filter: false,
      },
    },
    {
      name: "clubName",
      label: "Đơn Vị Tổ Chức",
    },

    {
      name: "setting",
      label: "Loại Sự Kiện",
      options: {
        customBodyRender: (value) => <div className="">{value?.name}</div>,
      },
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
              {eventList && (
                <>
                  <EditEventDialog dataRow={eventList[tableMeta?.rowIndex]} />
                  <ViewEventDialog dataRow={eventList[tableMeta?.rowIndex]} />
                </>
              )}

              {/* <DeleteAlertDialog
                onClick={() => handleDelete(tableMeta?.rowIndex)}
              /> */}
            </div>
          );
        },
      },
    },
  ];
  // const handleDelete = async (rowIndex) => {
  //   const rowData = data[rowIndex];
  //   await onDelete(rowData);
  // };

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
  const data = [
    {
      eventID: 1,
      clubId: 4,
      club: null,
      banner:
        "https://res.cloudinary.com/dgwtfzr13/image/upload/v1718898937/cld-sample-5.jpg",
      userId: "e4f125a1-1020-4931-bcbc-fc262b2e8abb",
      user: null,
      name: "Talkshow of english",
      description: "A talkshow",
      startDate: "2024-05-13T00:00:00",
      endDate: "2024-05-15T00:00:00",
      approveStatus: "Pending",
      status: "Not Yet",
      location: "Hội Trường",
      eventTypeId: 2,
      setting: null,
      registrations: null,
    },
    {
      eventID: 2,
      clubId: 8,
      club: null,
      banner:
        "https://res.cloudinary.com/dgwtfzr13/image/upload/v1719151396/TRANH-CD-HTAP-BAC-HO-2015-250_szl5h4.jpg",
      userId: "e4f125a1-1020-4931-bcbc-fc262b2e8abb",
      user: null,
      name: "Mock up",
      description: "Mock Up",
      startDate: "2024-06-23T00:00:00",
      endDate: "2024-06-25T00:00:00",
      approveStatus: "Approved",
      status: "Not Yet",
      location: "Sân Trường ",
      eventTypeId: 2,
      setting: null,
      registrations: null,
    },
  ];
  return (
    <div className="w-full">
      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={""}
          data={eventList || data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </div>
  );
}
