// import React, { useState } from "react"
// import $http from "../../plugins/axios"

// const ProductForm = ({ entity, setEntity }) => {
//   entity = entity || {}
//   const [productName, setProductName] = useState(entity.name)
//   const [productDescription, setProductDescription] = useState(
//     entity.description
//   )
//   const [productImage, setProductImage] = useState(entity.image)
//   const [productQuantity, setProductQuantity] = useState(entity.quantity)
//   const [productPrice, setProductPrice] = useState(entity.price)

//   const createProduct = async e => {
//     try {
//       e.preventDefault()
//       if (entity.id) {
//         // if entity id exists, update record
//         await $http.Api({
//           method: "PUT",
//           url: "/product/" + entity.id,
//           data: {
//             name: productName,
//             description: productDescription,
//             image: productImage,
//             quantity: productQuantity,
//             price: productPrice,
//           },
//         })
//       } else {
//         // create
//         await $http.Api({
//           method: "POST",
//           url: "/product",
//           data: {
//             name: productName,
//             description: productDescription,
//             image: productImage,
//             quantity: productQuantity,
//             price: productPrice,
//           },
//         })
//       }
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return (
//     <form action="" method="POST" className="container" onSubmit={createProduct}>
//       <div className="container">
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
//                 <p className="label">Product Description</p>
//                 <input
//                   className="input"
//                   type="text"
//                   placeholder=""
//                   required
//                   defaultValue={entity.description}
//                   onChange={e => setProductDescription(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="field is-horizontal">
//           <div className="field-body">
//             <div className="field">
//               <div className="control is-expanded">
//                 <p className="label">Product Image</p>
//                 <input
//                   className="input"
//                   type="text"
//                   placeholder="http://placeimg.com/640/480"
//                   required
//                   defaultValue={entity.image}
//                   onChange={e => setProductImage(e.target.value)}
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
//         <div className="field is-horizontal">
//           <div className="field-body">
//             <div className="field">
//               <div className="control is-expanded">
//                 <p className="label">Product Price</p>
//                 <input
//                   className="input"
//                   type="number"
//                   placeholder=""
//                   required
//                   defaultValue={entity.price}
//                   onChange={e => setProductPrice(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="field">
//           <button className="button is-black is-rounded" type="submit">
//             Create Product
//           </button>
//         </div>
//       </div>
//     </form>
//   )
// }

// export default ProductForm
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
  Switch,
} from "antd"
const { Option } = Select
const { Paragraph } = Typography

const ProductForm = () => {
  return (
    <div>
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Please enter product name",
                },
              ]}
            >
              <Input placeholder="Please enter product name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: "Please enter product description",
                },
              ]}
            >
              <Input placeholder="Please enter description" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="image"
              label="Image"
              rules={[
                {
                  required: true,
                  message: "Please enter product image",
                },
              ]}
            >
              <Input placeholder="Please enter product image" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="price"
              label="Price"
              rules={[
                {
                  required: true,
                  message: "Please enter product price",
                },
              ]}
            >
              <Input placeholder="Please enter price" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="stock"
              label="Quantity in stock"
              rules={[
                {
                  required: true,
                  message: "please enter stock",
                },
              ]}
            >
              <Input placeholder="please enter stock" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="sale"
              label="On sale"
              rules={[
                {
                  required: true,
                  message: "please enter on sale value",
                },
              ]}
            >
              <Switch defaultChecked></Switch>
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" size="large" block className="pt-2 pb-2">
          Create Product
        </Button>
      </Form>
    </div>
  )
}

export default ProductForm
