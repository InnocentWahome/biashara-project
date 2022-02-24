import React, { useState, useEffect } from "react"
import StyledDataGrid from "../../assets/styles/datagrid"
import PageLayout from "../../layouts/PageLayout"
import $http from "../../plugins/axios"
// import OrderForm from "../../components/forms/OrderForm"
import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar"

const DashboardProducts = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", width: 200,  },
    { field: "description", headerName: "Description", width: 200 },
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
            {/* {params.row.id} */}
          </div>
        )
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 250,
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
          <div
            className="d-flex  align-items-center"
            style={{ cursor: "pointer" }}
          >
            <Button variant="outlined" color="error">
              ORDER
            </Button>
          </div>
        )
      },
    },
  ]
  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = React.useState(25)
  const userFirstName = localStorage.getItem("userFirstName")
  const [editRowsModel, setEditRowsModel] = React.useState({})

  const handleEditRowsModelChange = React.useCallback(model => {
    setEditRowsModel(model)
  }, [])

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
        {/* <div className="columns">
          <div className="column is-three-quarters"> */}
        <div style={{ height: 600, width: "80%" }}>
          <StyledDataGrid
            rows={tableData}
            pageSize={pageSize}
            onPageSizeChange={newPage => setPageSize(newPage)}
            pagination
            columns={columns}
            editRowsModel={editRowsModel}
            editMode="row"
            onEditRowsModelChange={handleEditRowsModelChange}
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
      {/* <div className="column pt-6">
            <OrderForm />
          </div>
        </div>
      </div> */}
    </PageLayout>
  )
}

export default DashboardProducts
