import React, { useState, useEffect } from "react"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import PageLayout from "../layouts/PageLayout"
import $http from "../plugins/axios"
import Authorization from "../services/auth"
import { styled } from '@mui/material/styles';
import { FormControlLabel, IconButton } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from '@mui/icons-material/Delete';
import { blue, red } from "@material-ui/core/colors"
const EditRecord = ({ index }) => {
  const handleEditClick = () => {
    // some action
  }
  const handleDeleteClick = () => {
    // some action
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

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color:
    theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',
  '& .MuiDataGrid-columnsContainer': {
    backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
    borderRight: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`,
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    borderBottom: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`,
  },
  '& .MuiDataGrid-cell': {
    color:
      theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
  },
  '& .MuiPaginationItem-root': {
    borderRadius: 0,
  },
}));

const DataTable = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", width: 300 },
    { field: "description", headerName: "Description", width: 200 },
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
        // console.log(tableData)
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
  // const userFirstName = response.data.data.firstName

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
            // checkboxSelection
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
