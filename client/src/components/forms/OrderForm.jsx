import React, { useState } from "react"
import $http from "../../plugins/axios"

const ProductForm = () => {
  const [productId, setProductId] = useState("")
  const [productName, setProductName] = useState("")
  const [productQuantity, setProductQuantity] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [userId, setUserId] = useState("")
  const [cost, setCost] = useState("")
  const [adminApproval, setAdminApproval] = useState("")
  const [dispatchStatus, setDispatchStatus] = useState("")
  const [deliveryStatus, setDeliveryStatus] = useState("")

  const price = 100

  const createOrder = async (e) => {
    try {
      e.preventDefault();
      await $http.Api({
        method: "POST",
        url: "/order",
        data: {
          product_name: productName,
          product_id: productId,
          user_id: 19,
          quantity: productQuantity,
          cost: (productQuantity * price),
          adminApproval: false,
          dispatchStatus: false,
          deliveryStatus: false
        },
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form action="" method="POST" className="container" onSubmit={createOrder}>
      <div className="container">
      <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <p className="label">Product ID</p>
                <input
                  className="input"
                  type="text"
                  placeholder=""
                  required
                  onChange={e => setProductId(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <p className="label">Product Name</p>
                <input
                  className="input"
                  type="text"
                  placeholder=""
                  required
                  onChange={e => setProductName(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <p className="label">Product Quantity</p>
                <input
                  className="input"
                  type="number"
                  placeholder=""
                  required
                  onChange={e => setProductQuantity(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Create / Update Order
          </button>
        </div>
      </div>
    </form>
  )
}

export default ProductForm
