import React from "react";
const EventPropagation = () => {
  return (
    ////// bubling phase by default
    // <div
    //   className="grand-parent-div"
    //   onClick={() => console.log("grand parent called")}
    // >
    //   click grand parent
    //   <div className="parent-div" onClick={() => console.log("parent called")}>
    //     click parent
    //     <div className="child-div" onClick={() => console.log("Child clicked")}>
    //       click child
    //     </div>
    //   </div>
    // </div>
    //////////// for capturing phase we have to right onClickCapture to perform capturing phase
    <div
    className="grand-parent-div"
    onClickCapture={() => console.log("grand parent called")}
  >
    click grand parent
    <div className="parent-div" onClickCapture={() => console.log("parent called")}>
      click parent
      <div className="child-div" onClickCapture={() => console.log("Child clicked")}>
        click child
      </div>
    </div>
  </div>
  );
}; 

export default EventPropagation;
