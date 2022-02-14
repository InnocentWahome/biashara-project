import * as React from "react"
import EmployeeLayout from "../../layouts/EmployeeLayout"
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeHomePage = () => {
  return (
    <EmployeeLayout>
      <div className="container container pt-6 pl-6">
          <p className="title is-4 has-text-centered">Employee First Page</p>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
      </div>
    </EmployeeLayout>
  )
}
export default EmployeeHomePage
