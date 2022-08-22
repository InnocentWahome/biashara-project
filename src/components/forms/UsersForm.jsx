// import React, { useState } from "react"
// import $http from "../../plugins/axios"

// const CreateEmployeeForm = ({ entity, setEntity }) => {
//   entity = entity || {}
//   const [firstName, setFirstName] = useState(entity.firstName)
//   const [lastName, setLastName] = useState(entity.lastName)
//   const [phoneNumber, setPhoneNumber] = useState(entity.phoneNumber)
//   const [email, setEmail] = useState(entity.email)
//   const [password, setPassword] = useState(entity.password)
//   const [role, setRole] = useState(entity.role)

//   const register = async e => {
//     try {
//       e.preventDefault()
//       if (entity.id) {
//         // if entity id exists, update record
//         await $http.Api({
//           method: "PUT",
//           url: "/user-change/" + entity.id,
//           data: {
//             firstName: firstName,
//             lastName: lastName,
//             phoneNumber: phoneNumber,
//             email: email,
//             password: password,
//             role: role,
//           },
//         })
//       } else {
//         // create
//         await $http.Authentication({
//           method: "POST",
//           url: "/register",
//           data: {
//             firstName: firstName,
//             lastName: lastName,
//             phoneNumber: phoneNumber,
//             email: email,
//             password: password,
//             role: role,
//           },
//         })
//       }
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return (
//     <form action="" method="POST" className="container" onSubmit={register}>
//       <div className="container">
//         <div className="field is-horizontal">
//           <div className="field-body">
//             <div className="field">
//               <div className="control is-expanded">
//                 <input
//                   className="input"
//                   type="text"
//                   placeholder="First Name"
//                   required
//                   defaultValue={entity.firstName}
//                   onChange={e => setFirstName(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="field is-horizontal">
//           <div className="field-body">
//             <div className="field">
//               <div className="control is-expanded">
//                 <input
//                   className="input"
//                   type="text"
//                   placeholder="Last Name"
//                   required
//                   defaultValue={entity.lastName}
//                   onChange={e => setLastName(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="field is-horizontal">
//           <div className="field-body">
//             <div className="field">
//               <div className="control is-expanded">
//                 <input
//                   className="input"
//                   type="email"
//                   placeholder="Email"
//                   required
//                   defaultValue={entity.email}
//                   onChange={e => setEmail(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="field is-horizontal">
//           <div className="field-body">
//             <div className="field">
//               <div className="control is-expanded">
//                 <input
//                   className="input"
//                   type="string"
//                   placeholder="Phone Number"
//                   required
//                   defaultValue={entity.phoneNumber}
//                   onChange={e => setPhoneNumber(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="field is-horizontal">
//           <div className="field-body">
//             <div className="field">
//               <div className="control is-expanded">
//                 <input
//                   className="input"
//                   type="string"
//                   placeholder="password"
//                   required
//                   defaultValue={entity.password}
//                   onChange={e => setPassword(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="field is-horizontal">
//           <div className="field-body">
//             <div className="field">
//               <div className="control is-expanded">
//                 <div className="control">
//                   <label className="radio">
//                     <input
//                       type="radio"
//                       name="role"
//                       value="Employee"
//                       onChange={e => setRole(e.target.value)}
//                     />
//                     Employee
//                   </label>
//                   <label className="radio">
//                     <input
//                       type="radio"
//                       name="role"
//                       value="User"
//                       onChange={e => setRole(e.target.value)}
//                     />
//                     User
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="field">
//           <button className="button is-black is-rounded" type="submit">
//             Register
//           </button>
//         </div>
//       </div>
//     </form>
//   )
// }
// export default CreateEmployeeForm
import React, { useState } from "react"
import $http from "../../plugins/axios"
import {
  Form,
  Select,
  Row,
  Col,
  Input,
  DatePicker,
  Button,
  Typography,
  Checkbox,
} from "antd"
const { Option } = Select
const { Paragraph } = Typography

const UserForm = () => {
  return (
    <div>
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[
                {
                  required: true,
                  message: "Please enter first name",
                },
              ]}
            >
              <Input placeholder="Please enter first name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                {
                  required: true,
                  message: "Please enter product last name",
                },
              ]}
            >
              <Input placeholder="Please enter last name" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please enter email address",
                },
              ]}
            >
              <Input placeholder="Please enter email address" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="phoneNumber"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please enter phone number",
                },
              ]}
            >
              <Input placeholder="Please enter phone number" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="date"
              label="Date of birth"
              rules={[
                {
                  required: true,
                  message: "Please enter date of birth",
                },
              ]}
            >
              <DatePicker
                style={{
                  width: "100%",
                }}
                getPopupContainer={trigger => trigger.parentElement}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="id"
              label="ID / Passport Number"
              rules={[
                {
                  required: true,
                  message: "Please enter id  number",
                },
              ]}
            >
              <Input placeholder="Please enter id  number" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="password" label="Default autogenerated password">
              <Input disabled value="wahome" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="role"
              label="Role"
              rules={[
                {
                  required: true,
                  message: "Please enter user role",
                },
              ]}
            >
              <Select placeholder="Please choose an option">
                <Option value="admin">Administrator</Option>
                <Option value="employee">Employee</Option>
                <Option value="customer">Customer</Option>
                <Option value="service-worker">Service worker</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" size="large" block className="pt-2 pb-2">
          Create User
        </Button>
      </Form>
    </div>
  )
}

export default UserForm
