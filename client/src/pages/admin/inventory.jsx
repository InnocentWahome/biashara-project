import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import AdminLayout from "../../layouts/AdminLayout"
import $http from "../../plugins/axios"
import ProductForm from "../../components/forms/ProductForm"
import StyledDataGrid from "../../assets/styles/datagrid"

const AdminInventory = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: " Name", width: 200 },
    { field: "description", headerName: " Description", width: 500 },
    { field: "price", headerName: " Price(KSH)", width: 100 },
    { field: "quantity", headerName: " Quantity", width: 100 },
    { field: "image", headerName: "Image Url", width: 100 },
  ]
  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = React.useState(25)

  const fetchInventory = async e => {
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
    fetchInventory()
  }, [])

  return (
    <AdminLayout>
      <div className="pl-6 pr-6 pt-6">
        <div className="columns">
          <div className="column is-three-quarters">
            <p className="is-size-4 has-text-centered pb-3 pt-6 title">
              All Products Are Listed Here
            </p>
            <div style={{ height: 600, width: "100%" }}>
              <StyledDataGrid
                rows={tableData}
                pageSize={pageSize}
                onPageSizeChange={newPage => setPageSize(newPage)}
                pagination
                columns={columns}
              />
            </div>
          </div>
          <div className="column pt-6 mt-6">
            <ProductForm />
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminInventory
