// import React, { useState } from "react"
// import { navigate } from "gatsby"
// import $http from "../../../plugins/axios"


// const ForgotPasswordForm = () => {
//   const [email, setEmail] = useState("")

//   const forgotPassword = async e => {
//     e.preventDefault()
//     try {
//       const response = await $http.Authentication({
//         method: "POST",
//         url: "/forgot-password",
//         data: {
//           email: email,
//         },
//       })
//       console.log(response.data)
//       navigate("/authentication/reset-password")
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   return (
//     <form
//       action=""
//       method="POST"
//       className="container"
//       onSubmit={forgotPassword}
//     >
//       <div className="container">
//         <div className="field is-horizontal">
//           <div className="field-body">
//             <div className="field">
//               <div className="control is-expanded">
//                 <input
//                   className="input"
//                   type="email"
//                   placeholder="Email"
//                   required
//                   onChange={e => setEmail(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="field">
//           <button className="button is-black is-rounded" type="submit">
//             Send Email
//           </button>
//         </div>
//       </div>
//     </form>
//   )
// }

// export default ForgotPasswordForm
import React, { useState } from "react"
// import $http from "../../plugins/axios"
import moment from "moment"

import {
  Form,
  Select,
  Row,
  Col,
  Input,
  Button,
  Typography,
  Checkbox,
} from "antd"
const { Option } = Select
const { Paragraph } = Typography

const ForgotPasswordForm = () => {
  return (
    <div>
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="email"
              label="Please enter your email address "
              rules={[
                {
                  required: true,
                  message: "Please enter your email",
                },
              ]}
            >
              <Input placeholder="Please enter your email address" />
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" size="large" block className="pt-2 pb-2">
          Send magic link
        </Button>
      </Form>
    </div>
  )
}

export default ForgotPasswordForm
