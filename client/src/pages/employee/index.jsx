import * as React from "react"

import EmployeeLayout from "../../layouts/EmployeeLayout"

const EmployeeHomePage = () => {
  return (
    <EmployeeLayout>
      <div class="container">
        <h1 class="has-text-centered pt-4 pb-4 title is-size-4">
          Employee Home Page
        </h1>
        <br />
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead class="border border-success">
            <th class="pl-6 pr-6 ">Role</th>
            <th class="pb-3">Guide</th>
          </thead>
          <tbody class="border border-primary">
            <td class="has-text-centered ">
              Schedule maintenance and service requests
            </td>
            <td class="has-text-centered is-vcentered  pb-5">
              You can schedule maintenance and service requests on thee{" "}
              <a href="/employee/maintenance/">Maintenance</a>
              page. 
            </td>
          </tbody>
          <tbody class="border border-primary">
            <td class="has-text-centered "> View/Edit/Review Orders </td>
            <td class="has-text-centered is-vcentered  pb-5">
              You can review, edit and approve orders on the
              <a href="/employee/orders/">Orders Review</a> page
            </td>
          </tbody>
          <tbody class="border border-primary">
            <td class="has-text-centered ">Product Performance </td>
            <td class="has-text-centered is-vcentered  pb-5">
              Monitor performance of delivered products
              <a href="/employee/product-performance/">Delivered Product Performance</a>
              page
            </td>
          </tbody>
          <tbody class="border border-primary">
            <td class="has-text-centered ">Create Word Log </td>
            <td class="has-text-centered is-vcentered  pb-5">
              Create daily work performance logs on the
              <a href="/employee/my-performance/">My Performance</a>
              page
            </td>
          </tbody>
          <tbody class="border border-primary">
            <td class="has-text-centered ">Record stock </td>
            <td class="has-text-centered is-vcentered  pb-5">
              Record stock and account for deliveries made on the
              <a href="/employee/stock/">Stock</a>
              page
            </td>
          </tbody>     
         
        </table>
      </div>
    </EmployeeLayout>
  )
}
export default EmployeeHomePage
