// import React, { useRef } from 'react';
// import './styles.css';
// import ReactNotification from 'react-notifications-component';

// const Notification = () => {
//   const notificationDOMRef = useRef();

//   const addNotification = () => {
//     notificationDOMRef.current.addNotification({
//       title: "Cats",
//       message: "Cats!",
//       type: "awesome",
//       insert: "top",
//       container: "top-right",
//       animationIn: ["animated", "fadeIn"],
//       animationOut: ["animated", "fadeOut"],
//       dismiss: { duration: 2000 },
//       dismissable: { click: true }
//     });
//   }

  // const addNotification = () => {
  //   notificationDOMRef.current.addNotification({
  //     title: "Dogs",
  //     message: "Dogs!",
  //     type: "success",
  //     insert: "top",
  //     container: "top-right",
  //     animationIn: ["animated", "fadeIn"],
  //     animationOut: ["animated", "fadeOut"],
  //     dismiss: { duration: 2000 },
  //     dismissable: { click: true }
  //   });
  // }

// return(
//   <div className="app_notification">
//     <div className="notification_text">You have to options. Choose wisely</div>
//     <ReactNotification ref={notificationDOMRef} />
//     <button className="purple_button" onclick={addNotification()}> Press Me!</button>
//     <ReactNotification ref={notificationDOMRef} />
//     <button className="green_button" onclick={addNotification()}> Press Me!</button>
//   </div>
// );
// }
// export default Notification;
