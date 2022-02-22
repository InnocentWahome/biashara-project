import React, { useState, useEffect } from "react"
import StyledDataGrid from "../../assets/styles/datagrid"
import EmployeeLayout from "../../layouts/EmployeeLayout"
import $http from "../../plugins/axios"
import Button from "@mui/material/Button"

const EmployeeOrders = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "product_id", headerName: "Product ID", width: 100 },
    { field: "product_name", headerName: "Product Name", width: 200 },
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
      type: "boolean",
      disableClickEventBubbling: true,
      renderCell: params => {
        let decidedIcon
        if (params.row.delivery_status === 1) {
          decidedIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <Button size="small" variant="outlined" color="success">
                DELIVERED
              </Button>
            </div>
          )
        } else if (params.row.delivery_status === 0) {
          decidedIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <Button size="small" variant="outlined" color="error">
                NOT DELIVERED
              </Button>
            </div>
          )
        }
        return <div>{decidedIcon}</div>
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
  }, [])

  return (
    <EmployeeLayout>
      <div className="pr-6 pl-6 mr-6 pt-6 container">
        <p className="is-size-4 has-text-centered pb-2 pt-5 title">
          Dispatch Orders For Delivery
        </p>
        <div style={{ height: 600, width: "100%" }}>
          <StyledDataGrid
            rows={tableData}
            pageSize={pageSize}
            onPageSizeChange={newPage => setPageSize(newPage)}
            pagination
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
