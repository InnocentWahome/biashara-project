import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import EmployeeLayout from "../../layouts/EmployeeLayout"
import $http from "../../plugins/axios"
import EmployeeWorkLogForm from "../../components/forms/EmployeeWorkLogForm"

const EmployeePerformance = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "date", headerName: "Date", width: 200 },
    { field: "day", headerName: "Day", width: 200 },
    { field: "start", headerName: "Start Time", width: 200 },
    { field: "stop", headerName: "Stop Time", width: 200 },
    { field: "hours", headerName: "Hours Worked", width: 200 },
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
    <EmployeeLayout>
      <div className="pl-6 pr-6 ml-6 pt-6">
        <div className="columns">
          <div className="column is-two-thirds">
            <p className="is-size-4 has-text-centered pb-3 title">
              My Personal Work Log
            </p>
            <div style={{ height: 700, width: "200" }}>
              <DataGrid
                rows={tableData}
                pageSize={pageSize}
                onPageSizeChange={newPage => setPageSize(newPage)}
                pagination
                columns={columns}
                // checkboxSelection
              />
            </div>
          </div>
          <div className="column pt-6 mt-6">
            <EmployeeWorkLogForm />
          </div> 
        </div>
      </div>
    </EmployeeLayout>
  )
}

export default EmployeePerformance
