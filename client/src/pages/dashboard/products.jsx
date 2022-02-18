import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import PageLayout from "../../layouts/PageLayout"
import $http from "../../plugins/axios"
import OrderForm from "../../components/forms/OrderForm"

const DashboardProducts = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", width: 200, editable: true },
    { field: "description", headerName: "Description", width: 200 },
    { field: "quantity", headerName: "Stock Available", width: 200 },
    { field: "price", headerName: "Price", width: 200 },
    { field: "image", headerName: "Image URL", width: 200 },
  ]
  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = React.useState(25)
  const userFirstName = localStorage.getItem("userFirstName")
  const [editRowsModel, setEditRowsModel] = React.useState({});

  const handleEditRowsModelChange = React.useCallback((model) => {
    setEditRowsModel(model);
  }, []);

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
      <p className="is-size-6 pb-3 pt-3">Welcome back {userFirstName}! Here's what we have for you today</p>
        <div className="columns">
          <div className="column is-two-thirds">
            <div style={{ height: 600, width: "200" }}>
              <DataGrid
                rows={tableData}
                pageSize={pageSize}
                onPageSizeChange={newPage => setPageSize(newPage)}
                pagination
                columns={columns}
                editRowsModel={editRowsModel}
                editMode="row"
                onEditRowsModelChange={handleEditRowsModelChange}
              />
            </div>
          </div>
          <div className="column pt-6">
            <OrderForm />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default DashboardProducts
