import React, { useState, useEffect } from "react"
import { FormControlLabel, IconButton } from "@material-ui/core"
import { red } from "@material-ui/core/colors"
import StyledDataGrid from "../../assets/styles/datagrid"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import EmployeeLayout from "../../layouts/EmployeeLayout"
import $http from "../../plugins/axios"
import EmployeeWorkLogForm from "../../components/forms/EmployeeWorkLogForm"
import Button from "@mui/material/Button"

const EditRecord = ({ index, onClick }) => {
  const [entity, setEntity] = React.useState("")
  // const [category, updateCategory] = useState("")
  const [completed, updateCompleted] = useState("")
  const [description, updateDescription] = useState("")
  const [date, updateDate] = useState("")

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
const DeleteRecord = ({ index }) => {
  const handleDeleteClick = async e => {
    console.log("this one will be deleted")
    try {
      e.preventDefault()
      await $http
        .Api({
          method: "DELETE",
          url: "/worklog/" + index,
          data: {},
        })
        .then(console.log("it has been deleted"))
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <FormControlLabel
        control={
          <IconButton
            color="secondary"
            aria-label="add an alarm"
            onClick={handleDeleteClick}
          >
            <DeleteIcon style={{ color: red[500] }} />
          </IconButton>
        }
      />
    </div>
  )
}

const EmployeePerformance = () => {
  const [entity, setEntity] = React.useState()

  const columns = [
    { field: "date", headerName: "Date", width: 200, type: "dateTime" },
    { field: "day", headerName: "Day", width: 150 },
    { field: "description", headerName: "Description", width: 300 },
    { field: "hours", headerName: "Hours Worked", width: 150 },
    {
      field: "admin_approval",
      headerName: "Approval Status",
      width: 140,
      sortable: true,
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
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 140,
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
          <div className="columns">
            <div className="column">
              <div
                className="d-flex  align-items-center"
                style={{ cursor: "pointer" }}
              >
                <EditIcon onClick={EditRecord} color="primary" />
              </div>
            </div>
            <div className="column">
              <div
                className="d-flex  align-items-center"
                style={{ cursor: "pointer" }}
              >
                <DeleteIcon onClick={DeleteRecord} color="error" />
              </div>
            </div>
          </div>
        )
      },
    },
  ]
  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = React.useState(25)

  const fetchWorklog = async e => {
    try {
      // const userId = localStorage.getItem("userId")
      const response = await $http.Api({
        method: "GET",
        url: `/worklog`,
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
          <div className="column is-three-quarters">
            <p className="is-size-4 has-text-centered pb-3 pt-6 title">
              My Personal Work Log
            </p>
            <div style={{ height: 600, width: "100%" }}>
              <StyledDataGrid
                setEntity={setEntity}
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
          <div className="column pt-6 mt-6">
            {entity ? (
              <EmployeeWorkLogForm setEntity={setEntity} entity={entity} />
            ) : (
              <EmployeeWorkLogForm setEntity={setEntity} entity={entity} />
            )}
          </div>
        </div>
      </div>
    </EmployeeLayout>
  )
}

export default EmployeePerformance
