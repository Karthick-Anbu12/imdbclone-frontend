import React from 'react'
import { Link } from 'react-router-dom'

function Moviecard({item,index}) {
    return (
        <div className='mb-2' style={{ height: "18rem" }}>
            <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src={item.poster} alt="Card image cap" style={{ height: "18rem" }} />
                <div class="card-body">
                    <h5 class="card-title">{item.moviename}</h5>
                    <h5 class="card-title">{item.yor}</h5>
                    <h5 class="card-title">{item.producer}</h5>
                    <h5 class="card-title">{item.actors}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link href="#" class="btn btn-primary mx-2" to={`/viewinfo/${item._id}`}>View</Link>
                </div>
            </div>
        </div>
    )
}

export default Moviecard
