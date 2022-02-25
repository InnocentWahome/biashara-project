import React, { useState, useEffect } from "react"
import EmployeeLayout from "../../layouts/EmployeeLayout"
import ProductForm from "../../components/forms/ProductForm"
import $http from "../../plugins/axios"
import StyledDataGrid from "../../assets/styles/datagrid"
import Avatar from "@mui/material/Avatar"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { FormControlLabel, IconButton } from "@material-ui/core"
import { blue, red } from "@material-ui/core/colors"
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
          url: "/product/" + index,
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
const EmployeeInventory = () => {
  const [entity, setEntity] = React.useState()

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: " Name", width: 200 },
    { field: "description", headerName: " Description", width: 200 },
    { field: "price", headerName: " Price(KSH)", width: 150 },
    { field: "quantity", headerName: " Quantity", width: 150 },
    {
      field: "image",
      headerName: "Image",
      width: 140,
      renderCell: params => {
        return (
          <div>
            <Avatar src={params.row.image} alt="product picture" />
            {/* {params.row.id} */}
          </div>
        )
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
                  index={params.row.id}
                  onClick={() => setEntity(params.row)}
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
      const response = await $http.Api({
        method: "GET",
        url: "/product",
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
      <div className="pl-6 pr-6 pt-6">
        <div className="columns">
          <div className="column is-three-quarters">
            <p className="is-size-4 has-text-centered pb-3 pt-6 title">
              All Products Are Listed Here
            </p>
            <div>
              <div style={{ height: 600, width: "200" }}>
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
          </div>

          <div className="column pt-6 mt-6">
            {entity ? (
              <ProductForm setEntity={setEntity} entity={entity} />
            ) : (
              <ProductForm setEntity={setEntity} entity={entity} />
            )}
          </div>
        </div>
      </div>
    </EmployeeLayout>
  )
}

export default EmployeeInventory
