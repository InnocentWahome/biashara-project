// import React, { useState } from "react"
// import $http from "../../plugins/axios"
// // import TextField from "@mui/material/TextField"
// // import Stack from "@mui/material/Stack"

// const EmployeeWorkLogForm = ({ entity, setEntity }) => {
//   entity = entity || {}
//   const [date, setDate] = useState("")
//   const [day, setDay] = useState("")
//   const [hoursWorked, setHoursWorked] = useState("")
//   const [workDescription, setWorkDescription] = useState("")

//   // const userId = 1
//    const userEmail = "wahome@wahome.com"

//   const createEmployeeWorklog = async e => {
//     const userId = 1
//     try {
//       e.preventDefault()
//       if (entity.id) {
//         // if entity id exists, update record
//         await $http.Api({
//           method: "PUT",
//           url: "/worklog/" + entity.id,
//           data: {
//             date: date,
//             day: day,
//             hours: hoursWorked,
//             description: workDescription,
//             user_id: userId,
//             user_email: userEmail,
//           },
//         })
//       } else {
//         // create
//         await $http.Api({
//           method: "POST",
//           url: "/worklog",
//           data: {
//             date: date,
//             day: day,
//             hours: hoursWorked,
//             description: workDescription,
//             user_id: userId,
//             user_email: userEmail,
//             approval: 0

//           },
//         })
//       }
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   return (
//     <form
//       action=""
//       method="POST"
//       className="container"
//       onSubmit={createEmployeeWorklog}
//     >
//       <div className="container">
//         <div className="field is-horizontal">
//           <div className="field-body">
//             <div className="field">
//               <div className="control is-expanded">
//                 <p className="label">Date</p>
//                 <input
//                   className="input"
//                   type="text"
//                   placeholder="eg: YYYY-MM-DD"
//                   required
//                   defaultValue={entity.date}
//                   onChange={e => setDate(e.target.value)}
//                 />
//                 {/* <Stack component="form" noValidate spacing={3}>
//                   <TextField
//                     id="date"
//                     label="Date"
//                     type="date"
//                     defaultValue="2022-01-01"
//                     sx={{ width: 220 }}
//                     InputLabelProps={{
//                       shrink: true,
//                     }}
//                   />
//                 </Stack>  */}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="columns">
//           <div className="column">
//             <div className="field is-horizontal">
//               <div className="field-body">
//                 <div className="field">
//                   <div className="control is-expanded">
//                     <p className="label">Day</p>
//                     <div
//                       className="select"
//                       onChange={e => setDay(e.target.value)}
//                     >
//                       <select
//                         defaultValue={entity.day}
//                         onChange={e => setDay(e.target.value)}
//                       >
//                         <option
//                           onChange={e => setDay(e.target.value)}
//                           value="Monday"
//                         >
//                           Monday
//                         </option>
//                         <option
//                           onChange={e => setDay(e.target.value)}
//                           value="Tuesday"
//                         >
//                           Tuesday
//                         </option>
//                         <option
//                           onChange={e => setDay(e.target.value)}
//                           value="Wednesday"
//                         >
//                           Wednesday
//                         </option>
//                         <option
//                           onChange={e => setDay(e.target.value)}
//                           value="Thursday"
//                         >
//                           Thursday
//                         </option>
//                         <option
//                           onChange={e => setDay(e.target.value)}
//                           value="Friday"
//                         >
//                           Friday
//                         </option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="column">
//             <div className="field is-horizontal">
//               <div className="field-body">
//                 <div className="field">
//                   <div className="control is-expanded">
//                     <p className="label">Hours Worked</p>
//                     <input
//                       className="input"
//                       type="number"
//                       placeholder=""
//                       defaultValue={entity.hours}
//                       required
//                       onChange={e => setHoursWorked(e.target.value)}
//                     />
//                     {/* <Stack component="form" noValidate spacing={3}>
//                   <TextField
//                     id="date"
//                     label="Date"
//                     type="date"
//                     defaultValue="2022-01-01"
//                     sx={{ width: 220 }}
//                     InputLabelProps={{
//                       shrink: true,
//                     }}
//                   />
//                 </Stack>  */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <div className="columns">
//           <div className="column">
//             <div className="field is-horizontal">
//               <div className="field-body">
//                 <div className="field">
//                   <div className="control is-expanded">
//                      <p className="label">Start Time</p>
//                      <input
//                       className="input"
//                       type="number"
//                       placeholder="eg: 0800"
//                       required
//                       onChange={e => setStartTime(e.target.value)}
//                     />
//                     <Stack component="form" noValidate spacing={3}>
//                       <TextField
//                         id="time"
//                         label="Start Time"
//                         type="time"
//                         defaultValue="07:30"
//                         InputLabelProps={{
//                           shrink: true,
//                         }}
//                         inputProps={{
//                           step: 300, // 5 min
//                         }}
//                         sx={{ width: 150 }}
//                       />
//                     </Stack>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="column">
//             <div className="field is-horizontal">
//               <div className="field-body">
//                 <div className="field">
//                   <div className="control is-expanded">
//                      <p className="label">Stop Time</p>
//                     <input
//                       className="input"
//                       type="number"
//                       placeholder="eg: 1700"
//                       required
//                       onChange={e => setStopTime(e.target.value)}
//                     />
//                     <Stack component="form" noValidate spacing={3}>
//                       <TextField
//                         id="time"
//                         label="Stop Time"
//                         type="time"
//                         defaultValue="07:30"
//                         InputLabelProps={{
//                           shrink: true,
//                         }}
//                         inputProps={{
//                           step: 300, // 5 min
//                         }}
//                         sx={{ width: 150 }}
//                       />
//                     </Stack>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div> */}
//         <div className="field is-horizontal">
//           <div className="field-body">
//             <div className="field">
//               <div className="control is-expanded">
//                 <p className="label">Work Description</p>
//                 <textarea
//                   className="textarea"
//                   placeholder=""
//                   defaultValue={entity.description}
//                   required
//                   onChange={e => setWorkDescription(e.target.value)}
//                 ></textarea>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="field">
//           <button className="button is-black is-rounded" type="submit">
//             Submit
//           </button>
//         </div>
//       </div>
//     </form>
//   )
// }

// export default EmployeeWorkLogForm
import React, { useState } from "react"
import $http from "../../plugins/axios"
import moment from "moment"

import {
  Form,
  Select,
  Row,
  Col,
  Input,
  DatePicker,
  TimePicker,
  Button,
  Typography,
  Checkbox,
} from "antd"
const { Option } = Select
const { Paragraph } = Typography

const WorkLogForm = () => {
  return (
    <div>
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="date"
              label="Date"
              rules={[
                {
                  required: true,
                  message: "Please enter date of work",
                },
              ]}
            >
              <DatePicker
                style={{
                  width: "100%",
                }}
                getPopupContainer={trigger => trigger.parentElement}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="startTime"
              label="Start Time"
              rules={[
                {
                  required: true,
                  message: "Please enter start time",
                },
              ]}
            >
              <TimePicker
                defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
              ></TimePicker>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="stopTime"
              label="Stop Time"
              rules={[
                {
                  required: true,
                  message: "Please enter stop time",
                },
              ]}
            >
              <TimePicker
                defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
              ></TimePicker>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: "please enter work description",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="please enter work description"
              />
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" size="large" block className="pt-2 pb-2">
          Create User
        </Button>
      </Form>
    </div>
  )
}

export default WorkLogForm
