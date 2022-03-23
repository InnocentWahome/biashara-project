import React, { useState, useEffect } from "react"
import StyledDataGrid from "../../assets/styles/datagrid"
import EmployeeLayout from "../../layouts/EmployeeLayout"
import $http from "../../plugins/axios"
import Button from "@mui/material/Button"
import { FormControlLabel, IconButton } from "@material-ui/core"

const EmployeeOrders = ({ index, onClick }) => {
  const [entity, setEntity] = React.useState("")
  const [delivery_status, setDeliveryStatus] = React.useState("")

  const updateDelivery = () => {
    try {
      if (entity.id) {
        // if entity id exists, update record
        $http.Api({
          method: "PUT",
          url: "/order/" + entity.id,
          data: {
            delivery_status: delivery_status,
          },
        })
      } else {
        console.log("error")
      }
    } catch (error) {
      console.error(error)
    }

    return (
      <div>
        <FormControlLabel
          control={
            <IconButton
              color="secondary"
              aria-label="add an alarm"
              onClick={setEntity}
            ></IconButton>
          }
        />
      </div>
    )
  }
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "product_id", headerName: "Product ID", width: 100 },
    // { field: "product_name", headerName: "Product Name", width: 200 },
    { field: "user_id", headerName: "User ID", width: 100 },
    { field: "cost", headerName: "Cost(KSH)", width: 100 },
    { field: "quantity", headerName: " Quantity", width: 100 },
    {
      field: "payment_status",
      headerName: "Payment Status",
      width: 140,
      sortable: true,
      type: "boolean",
      disableClickEventBubbling: true,
      renderCell: params => {
        let decidedIcon
        if (params.row.payment_status === 1) {
          decidedIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <Button size="small" variant="outlined" color="success">
                PAID
              </Button>
            </div>
          )
        } else if (params.row.payment_status === 0) {
          decidedIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <Button size="small" variant="outlined" color="error">
                NOT PAID
              </Button>
            </div>
          )
        }
        return <div>{decidedIcon}</div>
      },
    },
    {
      field: "dispatch_status",
      headerName: "Dispatch Status",
      width: 140,
      sortable: true,
      type: "boolean",
      disableClickEventBubbling: true,
      renderCell: params => {
        let decidedIcon
        if (params.row.dispatch_status === 1) {
          decidedIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <Button size="small" variant="outlined" color="success">
                DISPATCHED
              </Button>
            </div>
          )
        } else if (params.row.dispatch_status === 0) {
          decidedIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <Button size="small" variant="outlined" color="error">
                NOT DISPATCHED
              </Button>
            </div>
          )
        }
        return <div>{decidedIcon}</div>
      },
    },
    {
      field: "delivery_status",
      headerName: "Delivery Status",
      width: 140,
      sortable: true,
      editable: true,
      type: "number",
      disableClickEventBubbling: true,
      renderCell: params => {
        let deliveryIcon
        if (params.row.delivery_status === 1) {
          deliveryIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <Button
                onClick={() => setEntity((params.row.delivery_status = 0))}
                index={params.row.id}
                size="small"
                variant="outlined"
                color="success"
              >
                DELIVERED
              </Button>
            </div>
          )
        } else if (params.row.delivery_status === 0) {
          deliveryIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <Button
                onClick={() => setEntity((params.row.delivery_status = 1))}
                index={params.row.id}
                size="small"
                variant="outlined"
                color="error"
              >
                NOT DELIVERED
              </Button>
            </div>
          )
        }
        return <div>{deliveryIcon}</div>
      },
    },
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
    updateDelivery(setEntity)
  }, [])

  return (
    <EmployeeLayout>
      <div className="pl-6 pr-6 pt-6 container">
        <p className="is-size-4 has-text-centered pt-5 title">Orders</p>
        <p className="is-size-5 has-text-centered pb-2 has-text-link">
          Once the admin approves dispatch for an order, and it has been
          delivered, check the order's delivery status as delivered
        </p>
        <div style={{ height: 600, width: "100%" }}>
          <StyledDataGrid
            rows={tableData}
            pageSize={pageSize}
            onPageSizeChange={newPage => setPageSize(newPage)}
            pagination
            setEntity={setEntity}
            columns={columns}
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: "#9e9e9e",
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
            }}
            // checkboxSelection
          />
        </div>
      </div>
    </EmployeeLayout>
  )
}

export default EmployeeOrders
