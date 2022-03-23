import * as React from "react"

import EmployeeLayout from "../../layouts/EmployeeLayout"

const EmployeeHomePage = () => {
  return (
    <EmployeeLayout>
      <div className="container">
        <h1 className="has-text-centered pt-6 mt-6 pb-4 title is-size-4">
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
              <td className=" ">Schedule maintenance and service requests</td>
              <td className=" is-vcentered  pb-5">
                You can schedule maintenance and service requests on the
                <a href="/employee/maintenance/"> Maintenance </a>
                page.
              </td>
            </tr>

            <tr>
              <td className=" "> View/ Edit/ Review Orders </td>
              <td className=" is-vcentered  pb-5">
                You can review, edit and approve orders on the
                <a href="/employee/orders/"> Orders Review </a> page
              </td>
            </tr>

            <tr>
              <td className=" "> Product Performance </td>
              <td className=" is-vcentered  pb-5">
                Monitor performance of delivered products  
                <a href="/employee/product-performance/">
                   Product Performance
                </a>
                  page
              </td>
            </tr>

            <tr>
              <td className=" "> Create Word Log </td>
              <td className=" is-vcentered  pb-5">
                Create daily work performance logs on the
                <a href="/employee/personal-performance/"> Personal Performance </a>
                page
              </td>
            </tr>

            <tr>
              <td className=" "> Record stock </td>
              <td className=" is-vcentered  pb-5">
                Record stock and account for deliveries made on the
                <a href="/employee/inventory/"> Manage Inventory </a>
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
