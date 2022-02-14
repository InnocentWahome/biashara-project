import React, { useState, useEffect } from "react"
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import '@inovua/reactdatagrid-community/base.css'
import '@inovua/reactdatagrid-enterprise/index.css'
// import NumberFilter from '@inovua/reactdatagrid-community/NumberFilter'
// import SelectFilter from '@inovua/reactdatagrid-community/SelectFilter'
// import DateFilter from '@inovua/reactdatagrid-community/DateFilter'
import PageLayout from "../layouts/PageLayout"
import $http from "../plugins/axios"

const DataTable = () => {

const columns = [
  { name: 'id', header: 'ID', minWidth: 50, defaultFlex: 0.5 },
  { name: 'name', header: 'Name', minWidth: 50, defaultFlex: 1 },
  { name: 'description', header: 'Description', maxWidth: 1000, defaultFlex: 1 }
]

const gridStyle = { minHeight: 550 }

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

const filterValue = [
  { name: 'id', operator: 'startsWith', type: 'number', value: '' },
  { name: 'name', operator: 'startsWith', type: 'string', value: '' },
  { name: 'description', operator: 'startsWith', type: 'string', value: '' },
];

return (
  <PageLayout>
    <div className="container">
      <div style={{ height: 700, width: "200" }}>
      <ReactDataGrid
        idProperty="id"
        columns={columns}
        dataSource={tableData}
        style={gridStyle}
        pagination
        defaultFilterValue={filterValue}
        editable={true}
/>
      </div>
    </div>
  </PageLayout>
)
}

export default DataTable