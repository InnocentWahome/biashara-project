import React, { useState, useEffect } from "react"
import StyledDataGrid from "../../assets/styles/datagrid"
import AdminLayout from "../../layouts/AdminLayout"
import $http from "../../plugins/axios"

const AdminDelivery = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "product_id", headerName: "Product ID", width: 120 },
    { field: "product_name", headerName: "Product Name", width: 200 },
    { field: "user_id", headerName: "User ID", width: 120 },
    { field: "cost", headerName: "Total Cost", width: 120 },
    { field: "quantity", headerName: "Order Quantity", width: 150 },
    { field: "admin_approval", headerName: "Admin Approval", width: 150 },
    { field: "dispatch_status", headerName: "Dispatch Status", width: 150 },
    { field: "delivery_status", headerName: "Delivery Status", width: 150 },
  ]
  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = React.useState(25)

  const fetchUsers = async e => {
    try {
      const response = await $http.Api({
        method: "GET",
        url: "/order",
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
      <div className="pr-6 pl-6 mr-6 pt-6">
        <p className="is-size-4 has-text-centered pb-3 pt-6 title">
          Approve Orders for Dispatch
        </p>
        <div style={{ height: 600, width: "100%" }}>
          <StyledDataGrid
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
    </AdminLayout>
  )
}

export default AdminDelivery
