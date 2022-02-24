import React from "react"
import EmployeeLayout from "../../layouts/EmployeeLayout"
import ProductPerformanceDatagrid from "../../components/shared/ProductPerformanceDatagrid"

const EmployeeProductPerformance = () => {
  return (
    <EmployeeLayout>
      <ProductPerformanceDatagrid />
    </EmployeeLayout>
  )
}

export default EmployeeProductPerformance
