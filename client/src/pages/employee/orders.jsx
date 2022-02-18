import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import EmployeeLayout from "../../layouts/EmployeeLayout"
import $http from "../../plugins/axios"
// import ProductForm from "../../components/forms/ProductForm"

const EmployeeOrders = () => {
  const columns = [
    // { field: "id", headerName: "ID" },
    { field: "product_id", headerName: "Product ID", width: 200 },
    { field: "product_name", headerName: "Product Name", width: 200 },
    { field: "user_id", headerName: "User ID", width: 200 },
    { field: "cost", headerName: "Cost(KSH)", width: 200 },
    { field: "quantity", headerName: "Product Quantity", width: 200 },
    { field: "admin_approval", headerName: "Admin Approval", width: 100 },
    { field: "dispatch_status", headerName: "Dispatch Status", width: 100 },
    { field: "delivery_status", headerName: "Delivery Status", width: 100 },
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
    <EmployeeLayout>
      <div className="pr-6 pl-6 mr-6 pt-6">
        {/* <div className="columns">
          <div className="column is-two-thirds"> */}
            <p className="is-size-4 has-text-centered pb-2 pt-5 title">
              Dispatch Orders For Delivery
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
          {/* <div className="column pt-6 mt-6">
            <ProductForm />
          </div> */}
        {/* </div>
      </div> */}
    </EmployeeLayout>
  )
}

export default EmployeeOrders
