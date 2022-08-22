// import React, { useState } from "react"
// import $http from "../../plugins/axios"

// const OrderForm = ({ entity, setEntity }) => {
//   entity = entity || {}
//   const [productId, setProductId] = useState(entity.id)
//   const [productName, setProductName] = useState(entity.name)
//   const [productQuantity, setProductQuantity] = useState(entity.quantity)

//   const price = 20
//   const userId = 1
//   const userEmail = "wahome@wahome.com"
//   const createOrder = async e => {
//     try {
//       e.preventDefault()
//       await $http.Api({
//         method: "POST",
//         url: "/order",
//         data: {
//           product_name: productName,
//           product_id: productId,
//           user_id: userId,
//           user_email: userEmail,
//           quantity: productQuantity,
//           cost: productQuantity * price,
//           payment_status: 0,
//           dispatch_status: 0,
//           delivery_status: 0,
//         },
//       })
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return (
//     <form action="" method="POST" className="container" onSubmit={createOrder}>
//       <div className="container">
//         <div className="field is-horizontal">
//           <div className="field-body">
//             <div className="field">
//               <div className="control is-expanded">
//                 <p className="label">Product ID</p>
//                 <input
//                   className="input"
//                   type="number"
//                   placeholder=""
//                   required
//                   defaultValue={entity.id}
//                   onChange={e => setProductId(e.target.value)}

//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="field is-horizontal">
//           <div className="field-body">
//             <div className="field">
//               <div className="control is-expanded">
//                 <p className="label">Product Name</p>
//                 <input
//                   className="input"
//                   type="text"
//                   placeholder=""
//                   required
//                   defaultValue={entity.name}
//                   onChange={e => setProductName(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="field is-horizontal">
//           <div className="field-body">
//             <div className="field">
//               <div className="control is-expanded">
//                 <p className="label">Product Quantity</p>
//                 <input
//                   className="input"
//                   type="number"
//                   placeholder=""
//                   required
//                   defaultValue={entity.quantity}
//                   onChange={e => setProductQuantity(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="field">
//           <button className="button is-black is-rounded" type="submit">
//             Create Order
//           </button>
//         </div>
//       </div>
//     </form>
//   )
// }

// export default OrderForm
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

const OrderForm = () => {
  return (
    <div>
      <Form layout="vertical" hideRequiredMark>
        <space></space>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Product Name"
              rules={[
                {
                  // required: true,
                  message: "Please enter product name",
                },
              ]}
            >
              <Input placeholder="Please enter product name" disabled />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="description"
              label="Product description"
              rules={[
                {
                  required: true,
                  message: "Please enter product description",
                },
              ]}
            >
              <Input placeholder="Please enter description" disabled />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="quantity"
              label="Quantity"
              rules={[
                {
                  required: true,
                  message: "please enter quantity",
                },
              ]}
            >
              <Input placeholder="please enter quantity"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="price" label="Final Price">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" size="large" block className="pt-2 pb-2">
          Create Order
        </Button>
      </Form>
    </div>
  )
}

export default OrderForm
