
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [User,fetchUser]=useState([])
  const [single,setsingle]=useState([])

  //"https://reqres.in/api/users?page=2"

  const getuser=async ()=>{
    const res=await fetch("https://reqres.in/api/users?page=1");
    const data=await res.json()
    fetchUser(data.data)
  }

  const handleuser=async (userid)=>{
    const resp=await fetch(`https://reqres.in/api/users/${userid}`);
    const data=await resp.json()
    console.log(resp)
    setsingle(data.data)
    console.log(single)
  }


  useEffect(()=>{
    getuser()
  },[])

  return (
      <div style={{marginLeft:"400px",marginTop:"200px"}}>

        <div>
          <div style={{width:"370px",paddingTop:"30px",height:"300px",boxShadow:"2px 2px 2px 2px black",marginBottom:"50px",paddingLeft:"20%"}}>
            <div style={{width:"150px",height:"130px",boxShadow:"2px 2px 2px 2px red"}}>
              <img style={{width:"150px",height:"130px"}} src={`${single.avatar}`} alt=""/>
            </div>
            <div style={{marginTop:"20px",display:"flex"}}>
              Email- {single.email}
            </div>
            <div>
              Firstname- {single.first_name}
            </div>
            <div>
              Lastname- {single.last_name}
            </div>
          </div>

        </div>


        <>
          <div  style={{display: "flex",marginLeft:"20px", flexDirection: "row",width:"400px",justifyContent:"space-evenly"}}>
            {User.map((e, index) => {
              return (
                  <div key={index}>
                    <button onClick={() => {
                      handleuser(e.id)
                    }}>{`User ${e.id}`}
                    </button>
                  </div>

              )
            })
            }
          </div>
        </>

      </div>
  );
}

export default App;
