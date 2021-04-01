import moment from 'moment';
import React from 'react';
const List =(props)=>{
    return(
    <div>
        <li className = "list-group-item shadow-sm">
            <div className= "row  align-items-center">
                <div className ="col-2">
                <img src={props.avater} alt={props.name} className ="border border-dark rounded-circle shadow-sm" />
                </div>

                <div className = "col-10">
               <p> <b>{props.name}</b> | {props.city}</p>
                <p>{props.email}</p>
                <p> {moment(props.Birthday).format('DD-MM-YYYY')}</p>
                <p>{ props.age}</p>
                </div>
            </div>   
        </li>
    </div>

    );

}
export default List;