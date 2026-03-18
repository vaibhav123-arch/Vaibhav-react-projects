import React, { useEffect ,useState } from 'react'

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const handleLogout=() =>{
        localStorage.removeItem("token");
        window.location.href = "/login" ;
    }

    useEffect(()=>{
        const fetchUsers= async ()=>{
            const response = await fetch("https://picsum.photos/v2/list");
            const data=await response.json();
            setUsers(data);
            setLoading(false);
        };

        fetchUsers();
    }, []);

   if(loading) return <h2>...Loading</h2>;


  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={handleLogout}>Logout</button>
      {users.map((user) => {
      return <p key={user.id}>{user.author}</p>
      })}
    </div>
  );
}

export default Dashboard;



