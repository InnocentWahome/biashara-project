import React, { useState, useEffect } from "react"
import OrdersDatagrid from "../../components/shared/OrdersDatagrid"
import EmployeeLayout from "../../layouts/EmployeeLayout"

const EmployeeOrders = () => {
  return (
    <EmployeeLayout>
      <div className="pr-6 pl-6 mr-6 pt-6">
        <p className="is-size-4 has-text-centered pb-2 pt-5 title">
          Dispatch Orders For Delivery
        </p>
        <div style={{ height: 600, width: "100%" }}>
          <OrdersDatagrid />
        </div>
      </div>
    </EmployeeLayout>
  )
}

export default EmployeeOrders
