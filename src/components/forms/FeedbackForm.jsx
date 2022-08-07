import React, { useState } from "react"
import $http from "../../plugins/axios"
import moment from "moment"

const OrderForm = ({ entity, setEntity }) => {
  entity = entity || {}
  const [productId, setProductId] = useState(entity.product_id)
  const [productName, setProductName] = useState(entity.product_name)
  const [description, setDescription] = useState(entity.description)
  const [rate, setRate] = useState(entity.rate)

  const userId = 1
  const userEmail = "wahome@wahome.com"

  const getDate = () => {
    // date_create: moment().format("DD-MM-YYYY")
    date_create: moment().format("YYY-MM-DD")
  }

  const sendFeedbackForm = async e => {
    const userId = 1
    const userEmail = "wahome@wahome.com"

    try {
      e.preventDefault()
      if (entity.id) {
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
            created_at: getDate,
          },
        })
      }
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
                  defaultValue={entity.product_id}
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
                  defaultValue={entity.product_name}
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
                  defaultValue={entity.description}
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
