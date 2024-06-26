import DeleteAlertDialog from "@/components/_personal/DeleteAlertDialog";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import EditDepartmentsDialog from "./EditDepartmentsDialog";
import DepartmentsView from "./DepartmentsView";
export default function DepartmentsTable({ departmentList, onDelete }) {
  const columns = [
    {
      name: "id",
      label: "No",
    },
    {
      name: "age",
      label: "Tên",
    },
    {
      name: "",
      label: "Ngày",
    },
    {
      name: "",
      label: "Số Lượng Thành Viên",
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
              <DepartmentsView dataRow={data[tableMeta?.rowIndex]} />
              <EditDepartmentsDialog dataRow={data[tableMeta?.rowIndex]} />
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
              backgroundColor: "#d2dee3",
            },
            head: {
              padding: "10px 16px",
            },
            body: {
              padding: "10px 16px",
              backgroundColor: "#d2dee3",
              fontSize: 16,
            },
          },
        },
        MUIDataTableHeadCell: {
          styleOverrides: {
            fixedHeader: {
              backgroundColor: "#b5b5b9",
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
  const handleDelete = async (rowIndex) => {
    const rowData = data[rowIndex];
    await onDelete(rowData);
  };
  return (
    <div className="w-full h-full">
      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={""}
          data={departmentList || []}
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </div>
  );
}
