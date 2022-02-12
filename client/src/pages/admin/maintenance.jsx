import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import AdminLayout from "../../layouts/AdminLayout"
import $http from "../../plugins/axios"
import CreateEmployeeForm from "../../components/forms/CreateEmployeeForm"

const AdminMaintenance = () => {
  const columns = [
    // { field: "id", headerName: "ID" },
    { field: "category", headerName: "Service Category", width: 200 },
    { field: "description", headerName: "Description", width: 200 },
    { field: "date", headerName: "Service Date", width: 200 },
  ]
  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = React.useState(25)

  const fetchUsers = async e => {
    try {
      const response = await $http.Api({
        method: "GET",
        url: "/service-request",
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
      <div className="container pt-6">
        <p class="is-size-4 has-text-centered pb-3">Maintenance </p>
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
    </AdminLayout>
  )
}

export default AdminMaintenance
