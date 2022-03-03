import React, { useState, useEffect } from "react"
import { FormControlLabel, IconButton } from "@material-ui/core"
import { blue, red } from "@material-ui/core/colors"
import StyledDataGrid from "../../assets/styles/datagrid"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import EmployeeLayout from "../../layouts/EmployeeLayout"
import $http from "../../plugins/axios"
import EmployeeWorkLogForm from "../../components/forms/EmployeeWorkLogForm"
import Button from "@mui/material/Button"

const EditRecord = ({ index, onClick }) => {
  const [category, updateCategory] = useState("")
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
            onClick={onClick}
          >
            <EditIcon style={{ color: blue[500] }} />
          </IconButton>
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

const EmployeePerformance = () => {
  const [entity, setEntity] = React.useState()

  const columns = [
    { field: "date", headerName: "Date", width: 200, type: "dateTime" },
    { field: "day", headerName: "Day", width: 150 },
    { field: "description", headerName: "Description", width: 300 },
    // { field: "start", headerName: "Start Time", width: 150 },
    // { field: "stop", headerName: "Stop Time", width: 150 },
    { field: "hours", headerName: "Hours Worked", width: 150 },
    {
      field: "admin_approval",
      headerName: "Approval Status",
      width: 140,
      sortable: true,
      // editable: true,
      // type: "number",
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
                <EditRecord
                  onClick={() => setEntity(params.row)}
                  index={params.row.id}
                />
              </div>
            </div>
            <div className="column">
              <div
                className="d-flex  align-items-center"
                style={{ cursor: "pointer" }}
              >
                <DeleteRecord index={params.row.id} />
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
      const userId = localStorage.getItem("userId")
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
