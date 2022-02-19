import React, { useState, useEffect } from "react"
import $http from "../../plugins/axios"
import { FormControlLabel, IconButton } from "@material-ui/core"
import { blue, red } from "@material-ui/core/colors"
import StyledDataGrid from "../../assets/styles/datagrid"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

const EditRecord = ({ index }) => {
  const price = 100
  const handleEditClick = async e => {}
  const handleDeleteClick = async e => {}

  return (
    <div>
      <FormControlLabel
        control={
          <IconButton
            color="secondary"
            aria-label="add an alarm"
            onClick={handleEditClick}
          >
            <EditIcon style={{ color: blue[500] }} />
          </IconButton>
        }
      />
      <FormControlLabel
        control={
          <IconButton
            color="secondary"
            aria-label="add an alarm"
            onClick={handleDeleteClick}
          >
            <DeleteIcon style={{ color: red[500] }} />
          </IconButton>
        }
      />
    </div>
  )
}

const AdminOrders = () => {
  const columns = [
    // { field: "id", headerName: "ID" },
    { field: "product_id", headerName: "Product ID", width: 100 },
    {
      field: "product_name",
      headerName: "Product Name",
      width: 200,
      editable: true,
    },
    { field: "user_id", headerName: "User ID", width: 100 },
    { field: "cost", headerName: "Total Cost", width: 100 },
    { field: "quantity", headerName: "Product Quantity", width: 100 },
    {
      field: "admin_approval",
      headerName: "Admin Approval",
      width: 140,
      sortable: true,
      editable: true,
      type: "boolean",
    },
    {
      field: "dispatch_status",
      headerName: "Dispatch Status",
      width: 140,
      sortable: true,
      type: "boolean",
      editable: true,
    },
    {
      field: "delivery_status",
      headerName: "Delivery Status",
      width: 140,
      sortable: true,
      type: "boolean",
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 140,
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
          <div className="columns">
            <div className="column">
              <div
                className="d-flex  align-items-center"
                style={{ cursor: "pointer" }}
              >
                <EditRecord index={params.row.id} />
              </div>
            </div>
            <div className="column">
              <div
                className="d-flex  align-items-center"
                style={{ cursor: "pointer" }}
              >
                <EditRecord index={params.row.id} />
              </div>
            </div>
          </div>
        )
      },
    },
  ]
  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = React.useState(25)

  const fetchOrders = async e => {
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
    fetchOrders()
  }, [])

  return (
    <div>
      <div style={{ height: 600, width: "200" }}>
        <StyledDataGrid
          rows={tableData}
          pageSize={pageSize}
          onPageSizeChange={newPage => setPageSize(newPage)}
          pagination
          columns={columns}
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: '#9e9e9e',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        />
      </div>
    </div>
  )
}

export default AdminOrders
