import React, { useState } from "react"
import $http from "../../plugins/axios"

const ProductForm = () => {
  const [productName, setProductName] = useState("")
  const [productDescription, setProductDescription] = useState("")
  const [productImage, setProductImage] = useState("")
  const [productQuantity, setProductQuantity] = useState("")
  const [productPrice, setProductPrice] = useState("")

  const createStock = async (e) => {
    try {
      e.preventDefault();
      await $http.Api({
        method: "POST",
        url: "/product",
        data: {
          name: productName,
          description: productDescription,
          image: productImage,
          quantity: productQuantity,
          price: productPrice,
        },
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form action="" method="POST" className="container" onSubmit={createStock}>
      <div className="container">
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
                <p className="label">Product Description</p>
                <input
                  className="input"
                  type="text"
                  placeholder=""
                  required
                  onChange={e => setProductDescription(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <p className="label">Product Image</p>
                <input
                  className="input"
                  type="text"
                  placeholder=""
                  required
                  onChange={e => setProductImage(e.target.value)}
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
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <div className="control is-expanded">
                <p className="label">Product Price</p>
                <input
                  className="input"
                  type="number"
                  placeholder=""
                  required
                  onChange={e => setProductPrice(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Create / Update Stock
          </button>
        </div>
      </div>
    </form>
  )
}

export default ProductForm
