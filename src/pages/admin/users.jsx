import React, { useState, useEffect } from "react"
// import { DataGrid } from "@mui/x-data-grid"
import AdminLayout from "../../layouts/AdminLayout"
import $http from "../../plugins/axios"
import CreateEmployeeForm from "../../components/forms/CreateEmployeeForm"
import StyledDataGrid from "../../assets/styles/datagrid"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { FormControlLabel, IconButton } from "@material-ui/core"
import { blue, red } from "@material-ui/core/colors"
import Button from "@mui/material/Button"

const AdminSystemUsers = () => {
  const [entity, setEntity] = React.useState()

  const EditRecord = ({ index, onClick }) => {
    const [name, updateName] = useState("")
    const [description, updateDescription] = useState("")
    const [price, updatePrice] = useState("")
    const [quantity, updateQuantity] = useState("")
    const [image, updateImage] = useState("")

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
            url: "/user-change/" + index,
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
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "firstName", headerName: "First Name", width: 120 },
    { field: "lastName", headerName: "Last Name", width: 120 },
    { field: "phoneNumber", headerName: "Phone Number", width: 200 },
    { field: "email", headerName: "Email Address", width: 250 },
    {
      field: "role",
      headerName: "Role",
      width: 140,
      sortable: true,
      editable: true,
      type: "string",
      disableClickEventBubbling: true,
      renderCell: params => {
        let decidedIcon
        if (params.row.role === "Admin") {
          decidedIcon = (
            <div
              className="d-flex  align-items-center "
              style={{ cursor: "pointer", color: 'blue' }}
            >
                ADMIN
            </div>
          )
        } else if (params.row.role === "Employee") {
          decidedIcon = (
            <div
              className="d-flex  align-items-center "
              style={{ cursor: "pointer", color: 'purple' }}
            >
                EMPLOYEE
            </div>
          )
        } else if (params.row.role === "User") {
          decidedIcon = (
            <div
              className="d-flex  align-items-center "
              style={{ cursor: "pointer", color: 'green' }}
            >
                USER
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

  const fetchUsers = async e => {
    try {
      const response = await $http.Authentication({
        method: "GET",
        url: "/users",
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
        <div className="columns">
          <div className="column is-three-quarters">
            <p className="is-size-4 has-text-centered pb-3 pt-6">
              All System Users
            </p>
            <div style={{ height: 600, width: "200" }}>
              <StyledDataGrid
                setEntity={setEntity}
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
            {entity ? (
              <CreateEmployeeForm setEntity={setEntity} entity={entity} />
            ) : (
              <CreateEmployeeForm setEntity={setEntity} entity={entity} />
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminSystemUsers
