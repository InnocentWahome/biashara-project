import * as React from "react"

import EmployeeLayout from "../../layouts/EmployeeLayout"

const EmployeeHomePage = () => {
  return (
    <EmployeeLayout>
      <div className="container pt-6 pl-6">
        <div className="pb-6 pt-6">
          <p className="title is-4 has-text-centered">Employee First Page</p>
          <div class="table-container">
            <table class="table table-striped ">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>Larry</td>
                  <td>the Bird</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </EmployeeLayout>
  )
}
export default EmployeeHomePage
