import * as React from "react"
import { DataGrid } from "@mui/x-data-grid"
import { useDemoData } from "@mui/x-data-grid-generator"
import PageLayout from "../../layouts/PageLayout"

// const DashboardOrders = () => {
//   return (
//     <PageLayout>
//       <div className="container pt-6 pl-6">
//         <div class="pb-6 pt-6">
//           <p class="title is-4 has-text-centered">Here are all your orders</p>
//         </div>
//       </div>
//     </PageLayout>
//   )
// }
// export default DashboardOrders

export default function PageSizeControlled() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 6,
  })

  const [pageSize, setPageSize] = React.useState(25)

  return (
    <PageLayout>
      <div class="container">
        <p class="title is-4 has-text-centered">Here are all your orders</p>
        <div style={{ height: 750, width: "100%" }}>
          <DataGrid
            pageSize={pageSize}
            onPageSizeChange={newPage => setPageSize(newPage)}
            pagination
            {...data}
          />
        </div>
      </div>
    </PageLayout>
  )
}
