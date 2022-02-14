import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import AdminLayout from "../../layouts/AdminLayout"
import $http from "../../plugins/axios"

const AdminProductPerformance = () => {
  const columns = [
    // { field: "id", headerName: "ID" },
    { field: "product_id", headerName: "Product ID", width: 200 },
    { field: "product_name", headerName: "Product Name", width: 200 },
    { field: "user_id", headerName: "User ID", width: 200 },
    { field: "rate", headerName: "Rate", width: 200 },
    { field: "description", headerName: "Review Description", width: 200 },
    { field: "created_at", headerName: "Date Posted", width: 200 },
  ]
  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = React.useState(25)

  const fetchFeedback = async e => {
    try {
      const response = await $http.Api({
        method: "GET",
        url: "/feedback",
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
    fetchFeedback()
  }, [])

  return (
    <AdminLayout>
      <div className="container pt-6">
        <p className="is-size-4 has-text-centered pb-3 pt-6">
          Delivered Products' Performance{" "}
        </p>
        <div style={{ height: 600, width: "200" }}>
          <DataGrid
            rows={tableData}
            pageSize={pageSize}
            onPageSizeChange={newPage => setPageSize(newPage)}
            pagination
            columns={columns}
            // checkboxSelection
          />
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminProductPerformance
