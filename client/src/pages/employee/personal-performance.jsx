import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import EmployeeLayout from "../../layouts/EmployeeLayout"
import $http from "../../plugins/axios"
import EmployeeWorkLogForm from "../../components/forms/EmployeeWorkLogForm"
import StyledDataGrid from "../../assets/styles/datagrid"

const EmployeePerformance = () => {
  const columns = [
    { field: "date", headerName: "Date", width: 200, type: 'dateTime' },
    { field: "day", headerName: "Day", width: 150 },
    { field: "start", headerName: "Start Time", width: 150 },
    { field: "stop", headerName: "Stop Time", width: 150 },
    { field: "hours", headerName: "Hours Worked", width: 150 },
  ]
  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = React.useState(25)

  const fetchWorklog = async e => {
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
    fetchWorklog()
  }, [])

  return (
    <EmployeeLayout>
      <div className="pl-6 pr-6 ml-6 pt-6">
        <div className="columns">
          <div className="column is-two-thirds">
            <p className="is-size-4 has-text-centered pb-3 pt-6 title">
              My Personal Work Log
            </p>
            <div style={{ height: 600, width: "100%" }}>
              <StyledDataGrid
                rows={tableData}
                pageSize={pageSize}
                onPageSizeChange={newPage => setPageSize(newPage)}
                pagination
                columns={columns}
                sx={{
                  boxShadow: 2,
                  border: 2,
                  borderColor: '#9e9e9e',
                  '& .MuiDataGrid-cell:hover': {
                    color: 'primary.main',
                  },
                }}
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
