import React,{useState} from "react";
// import { useParams } from 'react-router-dom';
// import Api from '../helpers/Api';
import ReactStars from 'react-stars';
import Api from "../helpers/Api";
import "./EditProfileView.css";

function EditProfileView(props){


let user = props.user;
let [updatedBook, setUpdatedBook] = useState();

async function exitGroup(event){
    let clubName = event.target.name; 
    let club = props.clubs.find(c => (c.name === (clubName)))

    
    let confirmation = confirm(`Do you really want to leave the club "${club.name}"?`)
    if(confirmation){
        let response = await Api.leaveClub(user.id, club.id)
        props.setUser(response.data)
    }
}


const ratingChanged = (newRating) => {
    //let book = name;
    console.log(newRating)
    setUpdatedBook()
  }


  function toggleFavorite (book) {    
    book.favorite === 1 ? book.favorite=0 : book.favorite=1;
    console.log(book)
}




return(
        
        <div className="EditProfile">


        <h2 className="title">Edit Your Clubs</h2>
            {user.clubs.map((c) => (
                <div key={c.name} className="d-inline-flex">
                <div key={c.category} className="card me-5" style={{ width: "18rem" }}>
                    <div >
                    <div className="card-body">
                        <h5 className="card-title">{c.name}</h5>
                        <button type="button" className="btn btn-outline-dark exit" onClick={e => exitGroup(e)} name={c.name}>Leave club</button>
                    </div>
                    </div>
                </div>
                </div>
            ))}
        
        <h2 className="title">Edit Your Bookshelf</h2>
                {user.books.map((b) => (
                    <div key={b.author} className="d-inline-flex">
                    
                    <div key={b.title} className="card me-5" style={{ width: "18rem" }}>
                        <div >
                        <div>
                            <img
                            src={`${b.image}`}
                            className="card-img-top"
                            alt={`${b.title}`}
                            />
                        </div>

                        <div className="card-body">

                            <ReactStars
                            count={5}
                            size={24}
                            value={b.rating}
                            onChange={ratingChanged}
                            color2={'#ffd700'} />
                            <h5 className="card-title">{b.title}</h5>
                            <h6 className="card-text">By {b.author}</h6>
                    
                            <button key={b.id} 
                                id="button" type="button" className="btn btn-outline-danger favoritebtn py-0" name={b.title} onClick={e => toggleFavorite(b
                                )}>
                                {b.favorite === 1 ?               
                                <i  className="bi bi-heart-fill heart" ></i>                        
                                :<i className="bi bi-heart heart"  name={b.title}  ></i>}
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}

        </div>
    )
}


export default EditProfileView;