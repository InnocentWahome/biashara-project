import React, { useState, useEffect } from "react"
import { DataGrid } from "@mui/x-data-grid"
import AdminLayout from "../../layouts/AdminLayout"
import $http from "../../plugins/axios"
import OrderForm from "../../components/forms/OrderForm"
import { styled } from '@mui/material/styles';
import { FormControlLabel, IconButton } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from '@mui/icons-material/Delete';
import { blue } from "@material-ui/core/colors"
const ApproveOrder = ({ index }) => {
  const handleApproveClick = () => {
    // some action
  }
  return (
      <FormControlLabel
      control={
        <IconButton
          color="secondary"
          aria-label="add an alarm"
          onClick={handleApproveClick}
        >
          <EditIcon style={{ color: blue[500] }} />
        </IconButton>
      }
    />
  )
}


const AdminOrders = () => {
  const columns = [
    // { field: "id", headerName: "ID" },
    { field: "product_id", headerName: "Product ID", width: 100 },
    { field: "product_name", headerName: "Product Name", width: 200 },
    { field: "user_id", headerName: "User ID", width: 100 },
    { field: "cost", headerName: "Cost(KSH)", width: 100 },
    { field: "quantity", headerName: "Product Quantity", width: 100 },
    {
      field: "admin_approval",
      headerName: "Admin Approval",
      width: 140,
      sortable: true,
      renderCell: params => {
        return (
          <div
            className="d-flex  align-items-center"
            style={{ cursor: "pointer" }}
          >
            <ApproveOrder index={params.row.id} />
          </div>
        )
      },
    },
    { field: "dispatch_status", headerName: "Dispatch Status", width: 140 },
    { field: "delivery_status", headerName: "Delivery Status", width: 140 },
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
      <div className="pl-6 pr-6 pt-6">
        <div className="columns">
          <div className="column is-three-quarters">
            <p className="is-size-4 has-text-centered pb-3 pt-6">
              Approve orders
            </p>
            <div style={{ height: 600, width: "200" }}>
              <DataGrid
                rows={tableData}
                pageSize={pageSize}
                onPageSizeChange={newPage => setPageSize(newPage)}
                pagination
                columns={columns}
              />
            </div>
          </div>
          <div className="column pt-6 mt-6">
            <OrderForm />
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminOrders
