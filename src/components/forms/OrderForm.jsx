import React, { useState } from "react"
import $http from "../../plugins/axios"

const OrderForm = ({ entity, setEntity }) => {
  entity = entity || {}
  const [productId, setProductId] = useState(entity.id)
  const [productName, setProductName] = useState(entity.name)
  const [productQuantity, setProductQuantity] = useState(entity.quantity)

  const price = 20
  const userId = 1
  const userEmail = "wahome@wahome.com"
  const createOrder = async e => {
    try {
      e.preventDefault()
      await $http.Api({
        method: "POST",
        url: "/order",
        data: {
          product_name: productName,
          product_id: productId,
          user_id: userId,
          user_email: userEmail,
          quantity: productQuantity,
          cost: productQuantity * price,
          payment_status: 0,
          dispatch_status: 0,
          delivery_status: 0,
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
                  type="number"
                  placeholder=""
                  required
                  defaultValue={entity.id}
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
                  defaultValue={entity.name}
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
                  defaultValue={entity.quantity}
                  onChange={e => setProductQuantity(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Create Order
          </button>
        </div>
      </div>
    </form>
  )
}

export default OrderForm
