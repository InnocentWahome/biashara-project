import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import PageLayout from "../layouts/PageLayout"
import $http from "../plugins/axios"

const DataTable = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" ,width: 300 },
    { field: "description", headerName: "Description", width: 600 },
  ]
  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = React.useState(25)

  const datagrid = async e => {
    try {
      const response = await $http.Api({
        method: "GET",
        url: "/course",
      });
      if (response.data?.data) {
        console.log(tableData)
        setTableData(response.data.data);
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    datagrid();
  }, [])



  return (
    <PageLayout>
      <div className="container">
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
    </PageLayout>
  )
}

export default DataTable
