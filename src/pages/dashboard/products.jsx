import React, { useState, useEffect } from "react"
import StyledDataGrid from "../../assets/styles/datagrid"
import PageLayout from "../../layouts/PageLayout"
import $http from "../../plugins/axios"
import OrderForm from "../../components/forms/OrderForm"
import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar"
import { FormControlLabel } from "@material-ui/core"

const DashboardProducts = () => {
  const CreateOrder = ({ index, onClick }) => {
    const [id, updateProductId] = useState("")
    const [name, updateProductName] = useState("")
    const [quantity, updateQuantity] = useState("")

    return (
      <div>
        <FormControlLabel control={<Button onClick={onClick}>ORDER</Button>} />
      </div>
    )
  }
  const [entity, setEntity] = React.useState()
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", width: 200 },
    { field: "description", headerName: "Description", width: 500 },
    { field: "quantity", headerName: "Stock", width: 100 },
    { field: "price", headerName: "Price", width: 100 },
    {
      field: "image",
      headerName: "Image",
      width: 140,
      renderCell: params => {
        return (
          <div>
            <Avatar src={params.row.image} alt="product picture" />
          </div>
        )
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 150,
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
          <div
            className="d-flex  align-items-center"
            style={{ cursor: "pointer" }}
          >
            <CreateOrder
              onClick={() => setEntity(params.row)}
              index={params.row.id}
            />
          </div>
        )
      },
    },
  ]
  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = React.useState(25)
  const userFirstName = "Innocent"

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
    <PageLayout>
      <div className="pl-6 mt-6 pr-6 pt-4">
        <p className="is-size-6 pb-3 pt-3">
          Welcome back {userFirstName}! Here's what we have for you today
        </p>
        <div className="columns">
          <div className="column ">
            <div style={{ height: 600, width: "100%" }}>
              <StyledDataGrid
                rows={tableData}
                setEntity={setEntity}
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
          <div className="column is-one-quarter pt-6">
            {entity ? (
              <OrderForm setEntity={setEntity} entity={entity} />
            ) : (
              <OrderForm setEntity={setEntity} entity={entity} />
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default DashboardProducts
