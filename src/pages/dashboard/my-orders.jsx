import React, { useState, useEffect } from "react"
import $http from "../../plugins/axios"
import { FormControlLabel, IconButton } from "@material-ui/core"
import { blue, red } from "@material-ui/core/colors"
import StyledDataGrid from "../../assets/styles/datagrid"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import PageLayout from "../../layouts/PageLayout"
import Button from "@mui/material/Button"
import OrderForm from "../../components/forms/OrderForm"

const DashboardUserOrders = () => {
  const [entity, setEntity] = React.useState("")
  const EditRecord = ({ index }) => {
    const handleEditClick = async e => {}

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
      </div>
    )
  }
  const DeleteRecord = ({ index }) => {
    const price = 100
    const handleDeleteClick = async e => {}

    return (
      <div>
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
  const columns = [
    { field: "id", headerName: "#", width: 50 },
    { field: "product_id", headerName: "Product Id", width: 100 },
    // { field: "product_name", headerName: "Product Name", width: 200 },
    {
      field: "cost",
      headerName: "Total Cost",
      width: 120,
      valueGetter: params => params.row.quantity * 50,
    },
    { field: "quantity", headerName: "Quantity", width: 120 },

    // {
    //   field: "payment",
    //   headerName: "Pay",
    //   width: 100,
    //   sortable: true,
    //   editable: true,
    //   type: "number",
    //   disableClickEventBubbling: true,
    //   renderCell: params => {
    //     return (
    //       <div
    //         className="d-flex  align-items-center"
    //         style={{ cursor: "pointer" }}
    //       >
    //         <Button variant="contained" color="secondary">
    //           PAY
    //         </Button>
    //       </div>
    //     )
    //   },
    // },
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
              <Button size="small" variant="outlined" color="primary">
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
              <Button size="small" variant="contained" color="secondary">
                PAY
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
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 250,
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
          <div className="columns">
            <div className="column">
              <div
                className="d-flex  align-items-center"
                style={{ cursor: "pointer" }}
              >
                <EditIcon onClick={EditRecord} color="primary" />
              </div>
            </div>
            <div className="column">
              <div
                className="d-flex  align-items-center"
                style={{ cursor: "pointer" }}
              >
                <DeleteIcon onClick={DeleteRecord} color="error" />
              </div>
            </div>
            <div className="column">
              <div
                className="d-flex  align-items-center"
                style={{ cursor: "pointer" }}
              >
                <Button variant="outlined" color="success">
                  FEEDBACK
                </Button>
              </div>
            </div>
          </div>
        )
      },
    },
  ]
  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = React.useState(25)
  const userId = localStorage.getItem("userId")

  const fetchMyOrders = async e => {
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
    fetchMyOrders()
  }, [])

  return (
    <PageLayout>
      <div className="pr-6 pl-6 mt-6 mr-6 pt-4">
        <p className="is-size-6 pt-3 pb-3">Here are all your orders</p>
        <div className="columns">
          <div className="column ">
            <div style={{ height: 600, width: "100%" }}>
              <StyledDataGrid
                rows={tableData}
                pageSize={pageSize}
                onPageSizeChange={newPage => setPageSize(newPage)}
                pagination
                columns={columns}
                // checkboxSelection
                sx={{
                  boxShadow: 2,
                  border: 2,
                  borderColor: "#9e9e9e",
                  "& .MuiDataGrid-cell:hover": {
                    color: "primary.main",
                  },
                }}
              />
            </div>
          </div>
          <div className="column is-one-quarter pt-6">
            <OrderForm />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default DashboardUserOrders
