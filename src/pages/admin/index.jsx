import * as React from "react"
import AdminLayout from "../../layouts/AdminLayout"

const AdminHome = () => {
  return (
    <AdminLayout>
      <div className="container">
        <h1 className="has-text-centered pt-6 mt-6 pb-4 title is-size-4">
          Admin Home Page
        </h1>
        <br />
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead className="border border-success">
            <tr>
              <th className="pl-6 pr-6 ">Role</th>
              <th className="pb-3">Guide</th>
            </tr>
          </thead>
          <tbody className="border border-primary">
            <tr className="border border-primary">
              <td className=" ">Access and Modify User's Data</td>
              <td className=" is-vcentered  pb-5">
                Go to the <a href="/admin/users/">System User's</a> page to view
                all users, both users and employees
              </td>
            </tr>
            <tr>
              <td className=" "> View/Edit/Review Orders </td>
              <td className=" is-vcentered  pb-5">
                You can review, edit and approve orders on the
                <a href="/admin/orders/"> Review Orders</a> page
              </td>
            </tr>
            <tr>
              <td className=" ">Authorize delivery requests</td>
              <td className=" is-vcentered  pb-5">
                Authorize delivery requests on the
                <a href="/admin/orders/"> Delivery Requests </a>
                page
              </td>
            </tr>
            <tr>
              <td className=" "> Manage Inventory </td>
              <td className=" is-vcentered  pb-5">
                Create and Update the company's inventory
                <a href="/admin/inventory/"> Manage Inventory </a>
                page
              </td>
            </tr>
            <tr>
              <td className=" ">Product Performance </td>
              <td className=" is-vcentered  pb-5">
                Review products' feedback on the
                <a href="/admin/product-performance/"> Product Performance </a>
                page
              </td>
            </tr>
            <tr>
              <td className=" ">Check Employee Performance</td>
              <td className=" is-vcentered  pb-5">
                Review and approve every employees' performance on the
                <a href="/admin/employee-performance/">
                  {" "}
                  Employee Performance{" "}
                </a>
                page
              </td>
            </tr>
            <tr>
              <td className=" ">Maintenance and Service Requests</td>
              <td className=" is-vcentered  pb-5">
                You can schedule maintenance and service requests on thee
                <a href="/admin/maintenance/"> Maintenance </a>
                page. You can also alert customers and employees on the same
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}
export default AdminHome
