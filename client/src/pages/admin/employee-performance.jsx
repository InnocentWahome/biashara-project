import React, { useState, useEffect } from "react"
import AdminLayout from "../../layouts/AdminLayout"
import $http from "../../plugins/axios"
import StyledDataGrid from "../../assets/styles/datagrid"
import Button from "@mui/material/Button"

const AdminEmployeePerformance = () => {
  const ApprovedButton = ({ index }) => {
    const handleApprovedClick = async e => {}
    return (
      <div className="d-flex  align-items-center" style={{ cursor: "pointer" }}>
        <Button size="small" variant="outlined" color="success">
          APPROVED
        </Button>
      </div>
    )
  }
  const NotApprovedButton = ({ index }) => {
    const handleNotApprovedClick = async e => {}
    return (
      <div className="d-flex  align-items-center" style={{ cursor: "pointer" }}>
        <Button size="small" variant="outlined" color="error">
          NOT APPROVED
        </Button>
      </div>
    )
  }
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "date", headerName: "Date", width: 100 },
    { field: "day", headerName: "Day", width: 100 },
    { field: "start", headerName: "Start Time", width: 130 },
    { field: "stop", headerName: "Stop Time", width: 130 },
    { field: "hours", headerName: "Hours Worked", width: 130 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "user_id", headerName: "Employee ID", width: 130 },
    {
      field: "admin_approval",
      headerName: "Admin Approval",
      width: 140,
      sortable: true,
      editable: true,
      type: "boolean",
      disableClickEventBubbling: true,
      renderCell: params => {
        let decidedIcon
        if (params.row.approval === 1) {
          decidedIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <ApprovedButton index={params.row.id} />
            </div>
          )
        } else if (params.row.approval === 0) {
          decidedIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <NotApprovedButton index={params.row.id} />
            </div>
          )
        }
        return <div>{decidedIcon}</div>
      },
    },
  ]
  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = React.useState(25)

  const fetchUsers = async e => {
    try {
      const response = await $http.Api({
        method: "GET",
        url: "/worklog",
      })
      if (response.data?.data) {
        console.log(tableData)
        setTableData(response.data.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <AdminLayout>
      <div className="container pt-6">
        <p className="is-size-4 has-text-centered pb-3 pt-6 title">
          Employee Work Logs
        </p>
        <div style={{ height: 600, width: "200" }}>
          <StyledDataGrid
            rows={tableData}
            pageSize={pageSize}
            onPageSizeChange={newPage => setPageSize(newPage)}
            pagination
            columns={columns}
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: "#9e9e9e",
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
            }}
          />
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminEmployeePerformance
