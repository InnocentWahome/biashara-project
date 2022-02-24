import React, { useState, useEffect } from "react"
import StyledDataGrid from "../../assets/styles/datagrid"
import EmployeeLayout from "../../layouts/EmployeeLayout"
import $http from "../../plugins/axios"
import MaintenanceScheduleForm from "../../components/forms/MaintainenceScheduleForm"
import Button from "@mui/material/Button"

const EmployeePerformance = () => {
  const CompletedButton = ({ index }) => {
    const handleApprovedClick = async e => {}
    return (
      <div className="d-flex  align-items-center" style={{ cursor: "pointer" }}>
        <Button size="small" variant="outlined" color="success">
          COMPLETED
        </Button>
      </div>
    )
  }
  const NotCompletedButton = ({ index }) => {
    const handleNotApprovedClick = async e => {}
    return (
      <div className="d-flex  align-items-center" style={{ cursor: "pointer" }}>
        <Button size="small" variant="outlined" color="error">
          NOT COMPLETED
        </Button>
      </div>
    )
  }
  const columns = [
    // { field: "id", headerName: "ID" },
    { field: "category", headerName: "Service Category", width: 150 },
    { field: "description", headerName: "Description", width: 300 },
    { field: "date", headerName: "Service Date", width: 200 },
    { field: "user_id", headerName: "Assigned To userId", width: 150 },
    {
      field: "completed",
      headerName: "Completion Status",
      width: 140,
      sortable: true,
      editable: true,
      type: "boolean",
      disableClickEventBubbling: true,
      renderCell: params => {
        let decidedIcon
        if (params.row.completed === 1) {
          decidedIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <CompletedButton index={params.row.id} />
            </div>
          )
        } else if (params.row.completed === 0) {
          decidedIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <NotCompletedButton index={params.row.id} />
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
        url: "/service-request",
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
      <div className="container pt-6">
        <div className="columns">
          <div className="column is-three-quarters">
            <p className="is-size-4 has-text-centered pb-3 pt-6 title">
              Scheduling Maintenance and Service Requests
            </p>
            <div style={{ height: 600, width: "100%" }}>
              <StyledDataGrid
                rows={tableData}
                pageSize={pageSize}
                onPageSizeChange={newPage => setPageSize(newPage)}
                pagination
                columns={columns}
                // checkboxSelection
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
          <div className="column pt-6 mt-6">
            <MaintenanceScheduleForm />
          </div>
        </div>
      </div>
    </EmployeeLayout>
  )
}

export default EmployeePerformance
