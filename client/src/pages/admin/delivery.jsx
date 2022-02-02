import * as React from "react"
import { DataGrid } from "@mui/x-data-grid"
import { useDemoData } from "@mui/x-data-grid-generator"
import AdminLayout from "../../layouts/AdminLayout"

// const AdminDelivery = () => {
//   return (
//     <AdminLayout>
//       <div className="container pt-6 pl-6">
//         <div class="pb-6 pt-6">
//           <p class="title is-4 has-text-centered">Authorize delivery requests</p>
//         </div>
//       </div>
//     </AdminLayout>
//   )
// }
// export default AdminDelivery

export default function PageSizeControlled() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 6,
  })

  const [pageSize, setPageSize] = React.useState(25)

  return (
    <AdminLayout>
      <div class="container">
        <p class="title is-4 has-text-centered pt-6 pb-3">
          Authorize delivery requests
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
