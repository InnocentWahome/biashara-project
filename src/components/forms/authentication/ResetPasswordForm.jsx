// import React, { useState } from "react"
// import { navigate } from "gatsby"
// import $http from "../../../plugins/axios"

// const ResetPasswordForm = () => {
//   const [password, setPassword] = useState("")

//   const resetPassword = async e => {
//     e.preventDefault()
//     try {
//       await $http.Authentication({
//         method: "POST",
//         url: "/reset-password",
//         data: {
//           password: password,
//         },
//       })
//       navigate("/authentication/login")
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   return (
//     <form
//       action=""
//       method="POST"
//       className="container"
//       onSubmit={resetPassword}
//     >
//       {" "}
//       <div className="container">
//         <div className="field is-horizontal">
//           <div className="field-body">
//             <div className="field">
//               <div className="control is-expanded">
//                 <input
//                   className="input"
//                   type="password"
//                   placeholder="New Password"
//                   required
//                   onChange={e => setPassword(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div className="field is-horizontal">
//           <div className="field-body">
//             <div className="field">
//               <div className="control is-expanded">
//                 <input
//                   className="input"
//                   type="password"
//                   placeholder=" Confirm New Password"
//                   required
//                   onChange={e => setPassword(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div> */}

//         <div className="field">
//           <button className="button is-black is-rounded" type="submit">
//             Reset Password
//           </button>
//         </div>
//       </div>
//     </form>
//   )
// }

// export default ResetPasswordForm
