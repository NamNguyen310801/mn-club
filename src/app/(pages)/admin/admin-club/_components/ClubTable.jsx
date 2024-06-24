import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DeleteAlertDialog from "@/components/_personal/DeleteAlertDialog";
import EditClubDialog from "./EditClubDialog";
export default function ClubTable({ clubList, onDelete }) {
  const columns = [
    {
      name: "id",
      label: "NO",
    },
    {
      name: "code",
      label: "Tên Viết Tắt",
    },
    {
      name: "name",
      label: "Tên CLB",
    },
    {
      name: "manager_id",
      label: "Chủ nhiệm",
    },

    {
      name: "club_category_id",
      label: "Loại CLB",
    },
    {
      name: "founding_date",
      label: "Ngày Thành Lập",
    },
    {
      name: "member_count",
      label: "SL Thành Viên",
    },
    {
      name: "status",
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
      name: "email",
      label: "Email",
      options: {
        customBodyRender: (value) => (
          <div className="text-wrap max-w-20 text-ellipsis overflow-hidden">
            {value}
          </div>
        ),
      },
    },
    {
      name: "website",
      label: "Website",
      options: {
        customBodyRender: (value) => (
          <div className="text-wrap max-w-20 text-ellipsis overflow-hidden">
            {value}
          </div>
        ),
      },
    },
    {
      name: "description",
      label: "Mô tả",
      options: {
        customBodyRender: (value) => (
          <div className="text-wrap max-w-20 text-ellipsis line-clamp-2">
            {value}
          </div>
        ),
      },
    },
    {
      name: "fund_amount",
      label: "Quỹ",
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
              <EditClubDialog dataRow={data[tableMeta?.rowIndex]} />
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
  const handleDelete = async (rowIndex) => {
    const rowData = data[rowIndex];
    await onDelete(rowData);
  };
  return (
    <div className="w-full h-full">
      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={""}
          data={clubList || []}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </div>
  );
}
