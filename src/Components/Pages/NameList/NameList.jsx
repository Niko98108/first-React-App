import React,{useEffect, useState} from 'react';
import List from './List';

const  NameList=()=>{
    const [loadData,setLoadData] = useState(new Date());
    const [nameList,setNameList] = useState([
        {
            id: 1,
            name: {title: 'mr',first: 'brad', last: 'gibson'},
            location: {city: 'kilcoole',},
            email: 'brad.gibson@example.com',
            dob: { date: '1993-07-20T09:44:18.674Z',age: 26},
            picture: {medium: 'https://randomuser.me/api/portraits/med/men/75.jpg'},
        },
        {
            id: 2,
            name: {title: 'Ms',first: 'Gül', last: 'Düşenkalkar'},
            location: {city: 'Diyarbakır',},
            email: 'gul.dusenkalkar@example.com',
            dob: { date: '1976-04-15T15:45:13.820Z',age: 45},
            picture: {medium: 'https://randomuser.me/api/portraits/med/women/54.jpg'},
        }
        
        ]);
        useEffect( () =>{
            fetch('https://randomuser.me/api/').then((response) => {
                return response.json();
            }).then((data) => {
                setNameList((nameList)=>[...nameList,data.results[0]]);
            });
        },[loadData]);
 

    const nameListComponent =()=>{
        return(
            nameList.map(item =>{
                return(

             <List 
                  key={item.id}
                  name ={`${item.name.first} ${item.name.last}`}
                  city ={item.location.city}
                  email ={item.email}
                  Birthday ={item.dob.date}
                  age ={item.dob.age}
                  avater ={item.picture.medium}
                 />
                );
            })

        );
    }

    const refreshUser =()=>{
        
        setLoadData(new Date());
            // setNameList((nameList)=>nameList.concat(newUser));  -> 'concat' get copy of array and add new item,then create new array

            //spread Oparator
            // setNameList([...nameList,newUser]);
    };

return (
    <div className= "container mt-5">
        <button type="button" name="" onClick={refreshUser} className ="btn btn-primary mb-4">Refresh </button>
        <ul className = "list-group">
         {nameListComponent()}
        </ul>
    </div>  
  );
}

export default NameList;