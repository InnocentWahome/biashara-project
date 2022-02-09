import * as React from "react"
import { DataGrid } from "@mui/x-data-grid"
import { useDemoData } from "@mui/x-data-grid-generator"
import EmployeeLayout from "../../layouts/EmployeeLayout"

// const EmployeeOrders = () => {
//   return (
//     <EmployeeLayout>
//       <div className="container pt-6 pl-6">
//         <div className="pb-6 pt-6">
//           <p className="title is-4 has-text-centered">
//             View orders and their status
//           </p>
//         </div>
//       </div>
//     </EmployeeLayout>
//   )
// }
// export default EmployeeOrders


export default function PageSizeControlled() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 6,
  })

  const [pageSize, setPageSize] = React.useState(25)

  return (
    <EmployeeLayout>
      <div className="container">
        <p className="title is-4 has-text-centered">
          All Customer Orders
        </p>
            <div style={{ height: 750, width: "70%" }}>
              <DataGrid
                pageSize={pageSize}
                onPageSizeChange={newPage => setPageSize(newPage)}
                pagination
                {...data}
              />
            </div>
      </div>
    </EmployeeLayout>
  )
}