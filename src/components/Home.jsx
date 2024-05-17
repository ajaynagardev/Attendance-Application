import "../App.css";
import React from "react";
// import { Link } from "react-router-dom";
class Home extends React.Component {
  constructor(props) {
    super(props);
    const storedStatus = JSON.parse(localStorage.getItem("attendance")) || [];
    this.state = {
      userData: [
        { userName: "Dev", id: "0", status: storedStatus[0] || "" },
        { userName: "Rahul", id: "1", status: storedStatus[1] || "" },
        { userName: "Arjun", id: "2", status: storedStatus[2] || "" },
        { userName: "Aman", id: "3", status: storedStatus[3] || "" },
        { userName: "Ajay", id: "4", status: storedStatus[4] || "" },
        { userName: "Naman", id: "5", status: storedStatus[5] || "" },
        { userName: "Krish", id: "6", status: storedStatus[6] || "" },
        { userName: "Vishal", id: "7", status: storedStatus[7] || "" },
        { userName: "Rohit", id: "8", status: storedStatus[8] || "" },
        { userName: "Raghav", id: "9", status: storedStatus[9] || "" },
        { userName: "Manish", id: "10", status: storedStatus[10] || "" },
        { userName: "anurag", id: "11", status: storedStatus[11] || "" },
        { userName: "apoorva", id: "12", status: storedStatus[12] || "" },
        { userName: "apoorv", id: "13", status: storedStatus[13] || "" },
        { userName: "swapnil", id: "14", status: storedStatus[14] || "" },
        { userName: "sonu", id: "15", status: storedStatus[15] || "" },
      ],
      newDate:''
    };
  }
  updateStatus = (id, status) => {
    let d = new Date()
    var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes()+ ":" + d.getSeconds() + " "+ (d.getHours()<12?'AM':'PM');
    this.setState({newDate:datestring})
    
    const updatedUserData = this.state.userData.map((user) => {
      if (user.id === id) {
        return { ...user, status };
      }
      return user;
    });

    this.setState({ userData: updatedUserData }, () => {
      let a = this.state.userData.map((user) => user.status);
      localStorage.setItem("attendance", JSON.stringify(a));
    });
  };
  render() {
    let a = this.state.userData.length - 1;
    return (
      <div className="container">
        <h1 style={{ margin: "20px" }} className="heading">
          Welcome To Attendance Application 
        </h1>
        <p style={{ fontSize: "18px" }}>Total users = {a}</p>
        <div className="wrapper">
          {this.state.userData.map((user) => (
            <div className="single-container" key={user.id}>
              <button
                onClick={() => this.updateStatus(user.id, "presence "+this.state.newDate)}
                className="button-70"
              >
                presence
              </button>
              <button
                onClick={() => this.updateStatus(user.id, "absence " +this.state.newDate)}
                className="button-70 button-ap"
              >
                absence
              </button>
              <button
                onClick={() => this.updateStatus(user.id, "leave " +this.state.newDate)}
                className="button-70 button-l"
              >
                leave
              </button>
              <span className="para">{user.userName}</span>
              <p className="para">{user.status}</p>
            </div>
          ))}
        </div>
        <div>
          <button
            className="button-70"
            onClick={() => localStorage.clear()}
            style={{ textAlign: "center" }}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}
export default Home;
