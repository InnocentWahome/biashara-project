import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import PageLayout from "../../layouts/PageLayout"
import $http from "../../plugins/axios"

const DashboardUserOrders = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "product_id", headerName: "Product Id", width: 200 },
    { field: "product_name", headerName: "Product Name", width: 200 },
    { field: "cost", headerName: "Total Cost", width: 200 },
    { field: "quantity", headerName: "Quantity", width: 200 },
    { field: "admin_approval", headerName: "Admin Approval", width: 200 },
    { field: "dispatch_status", headerName: "Dispatch Status", width: 200 },
    { field: "delivery_status", headerName: "Delivery Status", width: 200 },
  ]
  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = React.useState(25)

  const fetchMyOrders = async e => {
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
    fetchMyOrders()
  }, [])

  return (
    <PageLayout>
      <div className="pr-6 pl-6 mt-6 mr-6 pt-4">
        <p className="is-size-6 pt-3 pb-3">Here are all your orders</p>
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
    </PageLayout>
  )
}

export default DashboardUserOrders
