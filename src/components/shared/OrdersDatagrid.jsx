import React, { useState, useEffect } from "react"
import $http from "../../plugins/axios"
// import { FormControlLabel, IconButton } from "@material-ui/core"
// import { blue, red } from "@material-ui/core/colors"
import StyledDataGrid from "../../assets/styles/datagrid"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import Button from "@mui/material/Button"

// const EditRecord = ({ index, onClick }) => {
//   const [name, updateName] = useState("")
//   const [description, updateDescription] = useState("")
//   const [price, updatePrice] = useState("")
//   const [quantity, updateQuantity] = useState("")
//   const [image, updateImage] = useState("")

//   return (
//     <div>
//       <FormControlLabel
//         control={
//           <IconButton
//             color="secondary"
//             aria-label="add an alarm"
//             onClick={onClick}
//           >
//             <EditIcon style={{ color: blue[500] }} />
//           </IconButton>
//         }
//       />
//     </div>
//   )
// }

const OrdersDatagrid = () => {
  const [entity, setEntity] = React.useState("")
  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "product_id", headerName: "Product ID", width: 100 },
    {
      field: "product_name",
      headerName: "Product Name",
      width: 180,
      editable: true,
    },
    { field: "user_id", headerName: "User ID", width: 100 },
    { field: "user_email", headerName: "User Email", width: 230 },
    { field: "cost", headerName: "Total Cost", width: 100 },
    { field: "quantity", headerName: " Quantity", width: 100 },
    {
      field: "payment_status",
      headerName: "Payment Status",
      width: 140,
      sortable: true,
      type: "number",
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
      width: 170,
      sortable: true,
      editable: true,
      type: "number",
      disableClickEventBubbling: true,
      renderCell: params => {
        let deliveryIcon
        if (params.row.dispatch_status === 1) {
          deliveryIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <Button
                onClick={() => setEntity((params.row.dispatch_status = 0))}
                index={params.row.id}
                size="small"
                variant="outlined"
                color="success"
              >
                DISPATCHED
              </Button>
            </div>
          )
        } else if (params.row.dispatch_status === 0) {
          deliveryIcon = (
            <div
              className="d-flex  align-items-center"
              style={{ cursor: "pointer" }}
            >
              <Button
                onClick={() => setEntity((params.row.dispatch_status = 1))}
                index={params.row.id}
                size="small"
                variant="outlined"
                color="error"
              >
                NOT DISPATCHED
              </Button>
            </div>
          )
        }
        return <div>{deliveryIcon}</div>
      },
    },
    {
      field: "delivery_status",
      headerName: "Delivery Status",
      width: 170,
      sortable: true,
      // type: "boolean",
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
    // {
    //   field: "actions",
    //   headerName: "Actions",
    //   sortable: false,
    //   width: 140,
    //   disableClickEventBubbling: true,
    //   renderCell: params => {
    //     return (
    //       <div
    //         className="d-flex  align-items-center"
    //         style={{ cursor: "pointer" }}
    //       >
    //         <Button
    //           onClick={() => setEntity(params.row)}
    //           index={params.row.id}
    //         >
    //           EDIT
    //         </Button>
    //       </div>
    //     )
    //   },
    // },
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
        <div style={{ height: 600, width: "90%" }}>
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
        />
      </div>
    </div>
  )
}

export default OrdersDatagrid
