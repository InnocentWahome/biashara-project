import React, { useState, useEffect } from "react"
import StyledDataGrid from "../../assets/styles/datagrid"
import AdminLayout from "../../layouts/AdminLayout"
import $http from "../../plugins/axios"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { FormControlLabel, IconButton } from "@material-ui/core"
import { blue, red } from "@material-ui/core/colors"
import Button from "@mui/material/Button"
import MaintenanceScheduleForm from "../../components/forms/MaintenanceScheduleForm"

const AdminMaintenance = () => {
  const [entity, setEntity] = React.useState("")
  const EditRecord = ({ index, onClick }) => {
    const [category, updateCategory] = useState("")
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
            url: "/service-request/" + index,
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
    { field: "description", headerName: "Description", width: 500 },
    { field: "date", headerName: "Service Date", width: 200 },
    { field: "user_id", headerName: "Assigned To (ID)", width: 150 },
    // { field: "user_email", headerName: "Assigned To (Email)", width: 220 },
    {
      field: "completed",
      headerName: "Completion Status",
      width: 200,
      sortable: true,
      editable: true,
      type: "number",
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
    // {
    //   field: "actions",
    //   headerName: "Actions",
    //   sortable: false,
    //   width: 140,
    //   disableClickEventBubbling: true,
    //   renderCell: params => {
    //     return (
    //       <div className="columns">
    //         <div className="column">
    //           <div
    //             className="d-flex  align-items-center"
    //             style={{ cursor: "pointer" }}
    //           >
    //             <EditRecord
    //               onClick={() => setEntity(params.row)}
    //               index={params.row.id}
    //             />
    //           </div>
    //         </div>
    //         <div className="column">
    //           <div
    //             className="d-flex  align-items-center"
    //             style={{ cursor: "pointer" }}
    //           >
    //             <DeleteRecord index={params.row.id} />
    //           </div>
    //         </div>
    //       </div>
    //     )
    //   },
    // },
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
    <AdminLayout>
      <div className="pl-6 pr-6 pt-6">
        <p className="is-size-4 has-text-centered pb-3 pt-6">Maintenance </p>
        <div className="columns">
          <div className="column is-three-quarters">
            <div style={{ height: 600, width: "100% " }}>
              <StyledDataGrid
                rows={tableData}
                setEntity={setEntity}
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
            {entity ? (
              <MaintenanceScheduleForm setEntity={setEntity} entity={entity} />
            ) : (
              <MaintenanceScheduleForm setEntity={setEntity} entity={entity} />
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminMaintenance
