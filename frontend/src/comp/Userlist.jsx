import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Pagination from "./Pagination";
import User from "./User";
import "./style.css";

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [perPage, setperPage] = useState(4);
  const [totalUsers, setTotalUsers] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [userDetailVisible, setUserDetailVisible] = useState({});
  const [selectedUserID, setSelectedUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/data?page=${currentPage}&perPage=${perPage}`
      );
      console.log(response);
      setUsers(response.data.data);
      setFilteredUsers(response.data.data);
      setTotalUsers(response.data.totalUsers);
    };
    fetchData();
  }, [currentPage, perPage]);

  const handleShowDetails = (userId) => {
    setUserDetailVisible({ ...userDetailVisible, [userId]: true });
    setSelectedUserId(userId);
  };

  const handlesearch = () => {
    const searchTermLower = searchTerm.toLowerCase();
    const filtered = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(searchTermLower) ||
        user.email.toLowerCase().includes(searchTermLower)
      );
    });
    setFilteredUsers(filtered);
  };
  // const handleShowDetails = (user) => {
  //   setSelectedUser(user);
  //   setshowDetail(true);
  // };

  // const handleHideDetail = () => {
  //   setshowDetail(false);
  // };
  const handleHideDetails = () => {
    setUserDetailVisible({ ...userDetailVisible, [selectedUserID]: false });
    setSelectedUserId(null);
  };

  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  console.log(users);
  console.log(totalUsers);
  console.log(filteredUsers);
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handlesearch} className="search-button">
          Search
        </button>
      </div>
      <Table className="table" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.data?.map((user) => ( */}
          {filteredUsers?.map((user) => (
            // <React.Fragment key={user.id}>
            <>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  {userDetailVisible[user.id] ? (
                    <button
                      // onClick={() => handleShowDetails(user)}
                      onClick={() => handleHideDetails(user.id)}
                    >
                      Hide Details
                    </button>
                  ) : (
                    <button
                      // onClick={() => handleShowDetails(user)}
                      onClick={() => handleShowDetails(user.id)}
                    >
                      View Details
                    </button>
                  )}
                </td>
              </tr>
              {/* {showDetail && (
                <User
                  user={selectedUser}
                  onHideDetail={handleHideDetail}
                ></User>
              )} */}
              {userDetailVisible[user.id] && (
                <User user={user} onHideDetail={handleHideDetails}></User>
              )}
            </>
            // </React.Fragment>
          ))}
        </tbody>
      </Table>
      <Pagination
        currentPage={currentPage}
        perPage={perPage}
        totalUsers={totalUsers}
        paginate={paginate}
      />
    </div>
  );
};

export default Userlist;
