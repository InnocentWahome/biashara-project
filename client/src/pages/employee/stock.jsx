import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import EmployeeLayout from "../../layouts/EmployeeLayout"
import $http from "../../plugins/axios"
import StockForm from "../../components/forms/StockForm"

const EmployeeStock = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Product Name", width: 200 },
    { field: "description", headerName: "Product Description", width: 200 },
    { field: "price", headerName: "Product Price(KSH)", width: 200 },
    { field: "quantity", headerName: "Product Quantity", width: 200 },
    { field: "image", headerName: "Product Url", width: 200 },
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
        <div class="columns">
          <div class="column is-two-thirds">
            <p class="is-size-4 has-text-centered pb-3">
              All Products Are Listed Here
            </p>
            <div style={{ height: 700, width: "200" }}>
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
          <div class="column pt-6 mt-6">
            <StockForm />
          </div>
        </div>
      </div>
    </EmployeeLayout>
  )
}

export default EmployeeStock
