import React, { useState, useEffect } from "react"
import AdminLayout from "../../layouts/AdminLayout"
import $http from "../../plugins/axios"
import StyledDataGrid from "../../assets/styles/datagrid"
import Button from "@mui/material/Button"
import { FormControlLabel, IconButton } from "@material-ui/core"

const AdminEmployeePerformance = () => {
  const [entity, setEntity] = React.useState("")
  const ApprovedButton = ({ index }) => {
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
  const NotApprovedButton = ({ index }) => {
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

  function getEmail(params) {
    const response = () => {
      try {
        $http.Authentication({
          method: "SHOW",
          url: "/user/" + `${params.row.user_id}`,
        })
        console.log(response.data.email)
      } catch (error) {
        console.error(error)
      }
    }
    return response()
  }

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "day", headerName: "Day", width: 100 },
    { field: "hours", headerName: "Hours Worked", width: 130 },
    { field: "description", headerName: "Description", width: 300 },
    {
      field: "user_id",
      headerName: "Employee ID",
      width: 130,
    },
    {
      field: "user_email",
      headerName: "Employee Email",
      width: 220,
    },
    {
      field: "approval",
      headerName: "Approval Status",
      width: 140,
      sortable: true,
      editable: true,
      type: "number",
      disableClickEventBubbling: true,
      renderCell: params => {
        let deliveryIcon
        if (params.row.approval === 1) {
          deliveryIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <Button
                onClick={() => setEntity((params.row.approval = 0))}
                index={params.row.id}
                size="small"
                variant="outlined"
                color="success"
              >
                APPROVED
              </Button>
            </div>
          )
        } else if (params.row.approval === 0) {
          deliveryIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <Button
                onClick={() => setEntity((params.row.approval = 1))}
                index={params.row.id}
                size="small"
                variant="outlined"
                color="error"
              >
                NOT APPROVED
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
        url: "/worklog",
      })
      if (response.data?.data) {
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
