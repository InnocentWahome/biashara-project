import React, { useState } from "react"
import $http from "../../plugins/axios"

const OrderForm = () => {
  const [productId, setProductId] = useState("")
  const [productName, setProductName] = useState("")
  const [description, setDescription] = useState("")
  const [rate, setRate] = useState("")

  const userId = localStorage.getItem("userId")
  const userEmail = localStorage.getItem("userEmail")

  const sendFeedbackForm = async e => {
    const userId = localStorage.getItem("userId")
    const userEmail = localStorage.getItem("userEmail")

    try {
      e.preventDefault()
      await $http.Api({
        method: "POST",
        url: "/feedback",
        data: {
          product_id: productId,
          product_name: productName,
          description: description,
          user_id: userId,
          user_email: userEmail,
          rate: rate,
        },
      })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form
      action=""
      method="POST"
      className="container"
      onSubmit={sendFeedbackForm}
    >
      <div className="container">
        <p className="pt-6 is-size-4 pb-3">Share your opinion</p>
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
                <p className="label">Description</p>
                <textarea
                  placeholder=""
                  className="textarea"
                  required
                  onChange={e => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <p className="label">Rate</p>
                <div className="select" onChange={e => setRate(e.target.value)}>
                  <select onChange={e => setRate(e.target.value)}>
                    <option onChange={e => setRate(e.target.value)} value="1">
                      1
                    </option>
                    <option onChange={e => setRate(e.target.value)} value="2">
                      2
                    </option>
                    <option onChange={e => setRate(e.target.value)} value="3">
                      3
                    </option>
                    <option onChange={e => setRate(e.target.value)} value="4">
                      4
                    </option>
                    <option onChange={e => setRate(e.target.value)} value="5">
                      5
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Send Feedback
          </button>
        </div>
      </div>
    </form>
  )
}

export default OrderForm
