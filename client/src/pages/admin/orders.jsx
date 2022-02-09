import * as React from "react"
import { DataGrid } from "@mui/x-data-grid"
import { useDemoData } from "@mui/x-data-grid-generator"
import AdminLayout from "../../layouts/AdminLayout"

// const AdminOrders = () => {
//   return (
//     <AdminLayout>
//       <div className="container pt-6 pl-6">
//         <div className="pb-6 pt-6">
//           <p className="title is-4 has-text-centered">Review Orders</p>
//         </div>
//       </div>
//     </AdminLayout>
//   )
// }
// export default AdminOrders

export default function PageSizeControlled() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 6,
  })

  const [pageSize, setPageSize] = React.useState(25)

  return (
    <AdminLayout>
      <div className="container">
      <p className="title is-4 has-text-centered pt-6 pb-3">
          Review Orders
        </p>
        <div style={{ height: 600, width: "70%" }}>
          <DataGrid
            pageSize={pageSize}
            onPageSizeChange={newPage => setPageSize(newPage)}
            pagination
            {...data}
            editable
          />
        </div>
      </div>
    </AdminLayout>
  )
}
