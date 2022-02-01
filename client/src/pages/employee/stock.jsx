import * as React from "react"
import { DataGrid } from "@mui/x-data-grid"
import { useDemoData } from "@mui/x-data-grid-generator"
import EmployeeLayout from "../../layouts/EmployeeLayout"
import StockForm from "../../components/forms/StockForm"

// const EmployeeStock = () => {
//   return (
//     <EmployeeLayout>
//       <div className="container pt-6 pl-6">
//         <div class="pb-6 pt-6">
//           <p class="title is-4 has-text-centered">
//             Here is where we create/ record stock
//           </p>
//         </div>
//       </div>
//     </EmployeeLayout>
//   )
// }
// export default EmployeeStock

export default function PageSizeControlled() {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 6,
  })

  const [pageSize, setPageSize] = React.useState(25)

  return (
    <EmployeeLayout>
      <div class="container">
        <p class="title is-4 has-text-centered">
          Here is where we create/ record stock
        </p>
        <div class="columns">
          <div class="column">
            <div style={{ height: 750, width: "90%" }}>
              <DataGrid
                pageSize={pageSize}
                onPageSizeChange={newPage => setPageSize(newPage)}
                pagination
                {...data}
              />
            </div>
          </div>
          <div class="column is-one-third">
            <div class="pt-6 mt-6 container">
              <StockForm />
            </div>
          </div>
        </div>
      </div>
    </EmployeeLayout>
  )
}
