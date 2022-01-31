import React, { useState } from "react"

const Footer = () => {
  const [year] = useState(new Date().getFullYear())
  return (
    <div>
      <footer
        className="footer has-background-white is-fixed-bottom has-text-centered"
        role="navigation"
        aria-label="main navigation"
      >
        <div>
          <h3>Copyright © {year} CompanyName. All rights reserved.</h3>
        </div>
      </footer>
    </div>
  )
}

export default Footer
