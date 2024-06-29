import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DeleteAlertDialog from "@/components/_personal/DeleteAlertDialog";
import EditClubDialog from "./EditClubDialog";
import moment from "moment";
export default function ClubTable(props) {
  const { clubList, onDelete } = props;
  const columns = [
    {
      name: "code",
      label: "Tên Viết Tắt",
      options: {
        filter: false,
      },
    },
    {
      name: "name",
      label: "Tên CLB",
      options: {
        filter: false,
      },
    },
    {
      name: "manager",
      label: "Chủ nhiệm",
      options: {
        customBodyRender: (value) => (
          <div className="text-wrap max-w-20">{value?.fullName}</div>
        ),
        filter: false,
      },
    },
    {
      name: "setting",
      label: "Loại CLB",
      options: {
        customBodyRender: (value) => <div className="">{value?.name}</div>,
      },
    },
    {
      name: "foundingDate",
      label: "Ngày Thành Lập",
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
      name: "memberCount",
      label: "SL Thành Viên",
      options: {
        filter: false,
      },
    },
    {
      name: "status",
      label: "Trạng thái",
      options: {
        customBodyRender: (value) => <div>{value}</div>,
        // customBodyRender: (value) => <div>{value ? "Active" : "Inactive"}</div>,
        // filter: true,
        // filterType: "dropdown",
        // filterOptions: {
        //   names: ["Active", "Inactive"],
        //   logic: (enable, filterVal) => {
        //     if (filterVal.length > 0) {
        //       return (filterVal.includes("Active") && enable) ||
        //         (filterVal.includes("Inactive") && !enable)
        //         ? false
        //         : true;
        //     }
        //     return false;
        //   },
        // },
        // customFilterListOptions: {
        //   render: (value) => {
        //     if (value === true) return "Active";
        //     if (value === false) return "Inactive";
        //     return value;
        //   },
        // },
      },
    },
    {
      name: "avatar",
      label: "Avatar",
      options: {
        customBodyRender: (value) => (
          <img
            src={value}
            alt="avatar"
            className="w-10 h-10 rounded-full bg-center bg-contain overflow-hidden"
          />
        ),
        filter: false,
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
{clubList&& <EditClubDialog dataRow={clubList[tableMeta?.rowIndex]} />
            }
              <DeleteAlertDialog
                onClick={() => handleDelete(tableMeta?.rowIndex)}
              />
            </div>
          );
        },
      },
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

  const handleDelete = async (rowIndex) => {
    const rowData = data[rowIndex];
    await onDelete(rowData);
  };
  const data = [
    {
      clubId: 4,
      code: "FEC",
      name: "FPT English Club",
      email: "FEC@gmail.com",
      avatar:
        "https://res.cloudinary.com/dgwtfzr13/image/upload/v1718898937/cld-sample-5.jpg",
      description: "Club English",
      foundingDate: "2020-06-13T00:00:00",
      memberCount: 100,
      fundAmount: 100000,
      website: "www.fec.com",
      status: "Active",
      setting: "Học thuật",
      manager: {
        managerId: "1",
        fullName: "Nguy",
      },
    },
    {
      clubId: 4,
      code: "MNM",
      name: "KMK English Club",
      email: "KJH@gmail.com",
      avatar:
        "https://res.cloudinary.com/dgwtfzr13/image/upload/v1718898937/cld-sample-5.jpg",
      description: "Club English",
      foundingDate: "2020-06-18T00:00:00",
      memberCount: 100,
      fundAmount: 100000,
      website: "www.fec.com",
      status: "Active",
      setting: "Học thuật",
      manager: {
        managerId: "1",
        fullName: "Nguy",
      },
    },
  ];
  return (
    <div className="w-full h-full">
      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={""}
          data={clubList || data}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </div>
  );
}
