import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "image",
    headerName: "image",
    width: 550,
    height: 550,
    renderCell: (params) => <img src={params.row.id} alt="the alt" />
  }
];

const rows = [
  {
    id: 1,
    image:
      "https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg"
  },
  {
    id: 2,
    image:
      "https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg"
  }
];

export default function RenderCellGrid() {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid rows={rows} columns={columns}                 sx={{
                  boxShadow: 2,
                  border: 2,
                  borderColor: '#9e9e9e',
                  '& .MuiDataGrid-cell:hover': {
                    color: 'primary.main',
                  },
                }}/>
    </div>
  );
}
