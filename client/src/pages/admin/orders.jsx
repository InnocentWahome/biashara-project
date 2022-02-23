import React, { useState, useEffect } from "react"
import AdminLayout from "../../layouts/AdminLayout"
import OrdersDatagrid from "../../components/shared/OrdersDatagrid"
import OrderForm from "../../components/forms/OrderForm"

const AdminOrders = () => {
  return (
    <AdminLayout>
      <div className="pl-6 pr-6 pt-6">
        <div className="columns">
          <div className="column is-three-quarters">
            <p className="is-size-4 has-text-centered title pb-3 pt-6">
              Orders
            </p>
            <OrdersDatagrid />
          </div>
          <div className="column pt-6 mt-6">
            <OrderForm />
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default AdminOrders
