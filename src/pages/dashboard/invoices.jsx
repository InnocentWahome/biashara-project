import React, { useState, useEffect } from "react"
import $http from "../../plugins/axios"
import { FormControlLabel, IconButton } from "@material-ui/core"
import { blue, red } from "@material-ui/core/colors"
import StyledDataGrid from "../../assets/styles/datagrid"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import PageLayout from "../../layouts/PageLayout"
import Button from "@mui/material/Button"
import FeedbackForm from "../../components/forms/FeedbackForm"

const DashboardUserOrders = () => {
  const [entity, setEntity] = React.useState("")
  const CreateFeedback = ({ index, onClick }) => {
    return (
      <div>
        <FormControlLabel
          control={<Button onClick={onClick}>FEEDBACK</Button>}
        />
      </div>
    )
  }
  const columns = [
    { field: "id", headerName: "#", width: 50 },
    { field: "product_id", headerName: "Product Id", width: 100 },
    { field: "product_name", headerName: "Product Name", width: 200 },
    {
      field: "cost",
      headerName: "Total Cost",
      width: 120,
      valueGetter: params => params.row.quantity * 50,
    },
    { field: "quantity", headerName: "Quantity", width: 120 },
    {
      field: "payment_status",
      headerName: "Payment Status",
      width: 160,
      sortable: true,
      editable: true,
      disableClickEventBubbling: true,
      renderCell: params => {
        let deliveryIcon
        if (params.row.payment_status === 1) {
          deliveryIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <Button
                onClick={() => setEntity((params.row.payment_status = 0))}
                index={params.row.id}
                size="small"
                variant="contained"
                color="success"
              >
                PAID
              </Button>
            </div>
          )
        } else if (params.row.payment_status === 0) {
          deliveryIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <Button
                onClick={() => setEntity((params.row.payment_status = 1))}
                index={params.row.id}
                size="small"
                variant="outlined"
                color="error"
              >
                NOT PAID
              </Button>
            </div>
          )
        }
        return <div>{deliveryIcon}</div>
      },
    },
    {
      field: "dispatch_status",
      headerName: "Dispatch Status",
      width: 170,
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
      width: 170,
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
      width: 200,
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
          <div
            className="d-flex  align-items-center"
            style={{ cursor: "pointer" }}
          >
            <CreateFeedback
              onClick={() => setEntity(params.row)}
              index={params.row.id}
            />
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
                setEntity={setEntity}
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
            {entity ? (
              <FeedbackForm setEntity={setEntity} entity={entity} />
            ) : (
              <FeedbackForm setEntity={setEntity} entity={entity} />
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default DashboardUserOrders
