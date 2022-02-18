import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import AdminLayout from "../../layouts/AdminLayout"
import $http from "../../plugins/axios"
import StyledDataGrid from "../../assets/styles/datagrid"


const AdminEmployeePerformance = () => {
  const columns = [
    { field: "date", headerName: "Date", width: 200 },
    { field: "day", headerName: "Day", width: 200 },
    { field: "start", headerName: "Start Time", width: 200 },
    { field: "stop", headerName: "Stop Time", width: 200 },
    { field: "hours", headerName: "Hours Worked", width: 200 },
    { field: "user_id", headerName: "Employee ID", width: 200 },
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
        <p className="is-size-4 has-text-centered pb-3 pt-6 title">Employee Work Logs</p>
        <div style={{ height: 600, width: "200" }}>
          <StyledDataGrid
            rows={tableData}
            pageSize={pageSize}
            onPageSizeChange={newPage => setPageSize(newPage)}
            pagination
            columns={columns}
          />
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminEmployeePerformance
