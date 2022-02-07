import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import PageLayout from "../layouts/PageLayout"
// import axios from "axios"

const columns = [
  { field: "id", headerName: "ID" },
  { field: "title", headerName: "Title", width: 300 },
  { field: "body", headerName: "Body", width: 600 },
]

const DataTable = () => {
  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = React.useState(25)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(data => data.json())
      .then(data => setTableData(data))
  }, [])

  console.log(tableData)

  return (
    <PageLayout>
      <div class="container">
        <div style={{ height: 700, width: "200" }}>
          <DataGrid
            rows={tableData}
            pageSize={pageSize}
            onPageSizeChange={newPage => setPageSize(newPage)}
            pagination
            columns={columns}
            checkboxSelection
          />
        </div>
      </div>
    </PageLayout>
  )
}

export default DataTable
