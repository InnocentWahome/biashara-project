import React, { useState, useEffect } from "react"
import StyledDataGrid from "../../assets/styles/datagrid"
import EmployeeLayout from "../../layouts/EmployeeLayout"
import $http from "../../plugins/axios"
// import MaintenanceScheduleForm from "../../components/forms/MaintenanceScheduleForm"
import Button from "@mui/material/Button"
import { FormControlLabel, IconButton } from "@material-ui/core"

const EmployeePerformance = () => {
  const [entity, setEntity] = React.useState("")
  const CompletedButton = ({ index }) => {
    const handleApprovedClick = async e => {}
    return (
      <div>
        <FormControlLabel
          control={
            <IconButton
              color="secondary"
              aria-label="add an alarm"
              onClick={setEntity}
            ></IconButton>
          }
        />
      </div>
    )
  }
  const NotCompletedButton = ({ index }) => {
    const handleNotApprovedClick = async e => {}
    return (
      <div>
        <FormControlLabel
          control={
            <IconButton
              color="secondary"
              aria-label="add an alarm"
              onClick={setEntity}
            ></IconButton>
          }
        />
      </div>
    )
  }
  const columns = [
    // { field: "id", headerName: "ID" },
    { field: "category", headerName: "Service Category", width: 150 },
    { field: "description", headerName: "Description", width: 690 },
    { field: "date", headerName: "Service Date", width: 200 },
    // { field: "user_id", headerName: "Assigned To userId", width: 150 },
    {
      field: "completed",
      headerName: "Completion Status",
      width: 170,
      sortable: true,
      editable: true,
      type: "boolean",
      disableClickEventBubbling: true,
      renderCell: params => {
        let deliveryIcon
        if (params.row.completed === 1) {
          deliveryIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <Button
                onClick={() => setEntity((params.row.completed = 0))}
                index={params.row.id}
                size="small"
                variant="outlined"
                color="success"
              >
                COMPLETED
              </Button>
            </div>
          )
        } else if (params.row.completed === 0) {
          deliveryIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <Button
                onClick={() => setEntity((params.row.completed = 1))}
                index={params.row.id}
                size="small"
                variant="outlined"
                color="error"
              >
                NOT COMPLETED
              </Button>
            </div>
          )
        }
        return <div>{deliveryIcon}</div>
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
      <div className="pl-6 pr-6 pt-6 container">
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
    </EmployeeLayout>
  )
}

export default EmployeePerformance
