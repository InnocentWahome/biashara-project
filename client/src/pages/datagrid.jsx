import React, { useState, useEffect } from "react"
import { GridToolbar } from "@mui/x-data-grid"
import PageLayout from "../layouts/PageLayout"
import {$http } from "../plugins/axios"
import Authorization from "../plugins/authorization"
import { FormControlLabel, IconButton } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import { blue, red } from "@material-ui/core/colors"
import StyledDataGrid from "../assets/styles/datagrid"
const EditRecord = ({ index }) => {
  const price = 100
  const handleEditClick = async e => {
    try {
      e.preventDefault()
      await $http.Api({
        method: "PUT",
        url: "/order/",
        data: {
          url: "/order/{id}",
          data: {
            // product_name: productName,
            // product_id: productId,
            // user_id: 19,
            // quantity: quantity,
            // cost: quantity * price,
            // adminApproval: false,
            // dispatchStatus: false,
            // deliveryStatus: false,
          },
        },
      })
    } catch (error) {
      console.error(error)
    }
  }
  const handleDeleteClick = async e => {
    try {
      e.preventDefault()
      await $http.Api({
        method: "DELETE",
        url: "/order/{id}",
        data: {},
      })
    } catch (error) {
      console.error(error)
    }
  }

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

const DataTable = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", width: 300 },
    { field: "description", headerName: "Description", width: 200, editable: true },
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

  const datagrid = async e => {
    try {
      const response = await $http.Api({
        method: "GET",
        url: "/course",
      })
      if (response.data?.data) {
        setTableData(response.data.data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    datagrid()
    Authorization()
  }, [])

  return (
    <PageLayout>
      <div className="container pt-6 mt-6">
        <p className="is-size-6 pb-3 pt-3">
          Welcome back Here's what we have for you today
        </p>
        <div style={{ height: 600, width: "55%  " }}>
          <StyledDataGrid
            rows={tableData}
            rowHeight={35}
            pageSize={pageSize}
            onPageSizeChange={newPage => setPageSize(newPage)}
            pagination
            columns={columns}
            // checkboxSelection\
            
            throttleRowsMs={2000}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </div>
      </div>
    </PageLayout>
  )
}

export default DataTable
