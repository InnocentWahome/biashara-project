import * as React from "react"

import EmployeeLayout from "../../layouts/EmployeeLayout"

const EmployeeHomePage = () => {
  return (
    <EmployeeLayout>
      <div className="container">
        <h1 className="has-text-centered pt-4 pb-4 title is-size-4">
          Employee Home Page
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
            <tr>
              <td className="has-text-centered ">
                Schedule maintenance and service requests
              </td>
              <td className="has-text-centered is-vcentered  pb-5">
                You can schedule maintenance and service requests on thee{" "}
                <a href="/employee/maintenance/"> Maintenance </a>
                page.
              </td>
            </tr>

            <tr>
              <td className="has-text-centered "> View/ Edit/ Review Orders </td>
              <td className="has-text-centered is-vcentered  pb-5">
                You can review, edit and approve orders on the
                <a href="/employee/orders/"> Orders Review </a> page
              </td>
            </tr>

            <tr>
              <td className="has-text-centered "> Product Performance </td>
              <td className="has-text-centered is-vcentered  pb-5">
                Monitor performance of delivered products
                <a href="/employee/product-performance/"> 
                  Delivered Product Performance 
                </a>
                page
              </td>
            </tr>

            <tr>
              <td className="has-text-centered "> Create Word Log </td>
              <td className="has-text-centered is-vcentered  pb-5">
                Create daily work performance logs on the
                <a href="/employee/my-performance/">My Performance</a>
                page
              </td>
            </tr>

            <tr>
              <td className="has-text-centered "> Record stock </td>
              <td className="has-text-centered is-vcentered  pb-5">
                Record stock and account for deliveries made on the
                <a href="/employee/stock/">Stock</a>
                page
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </EmployeeLayout>
  )
}
export default EmployeeHomePage
