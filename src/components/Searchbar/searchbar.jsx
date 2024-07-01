import { useState } from 'react';
import './searchbar.scss'

const types = ["buy","rent"];

function Searchbar(){
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minprice: 0,
        maxprice: 0,
    });

    const switchType = (val) => {
        setQuery((prev) => ({ ...prev, type: val}))
    }

  return (
    <div className='searchbar'>
        <div className="type">
            <button>Buy</button>
            <button>Rent</button>
        </div>
        <form action="">
            <input type="text" name='location' placeholder='cityloaction' />
            <input type="number" name='minprice' min={0} max={1000000} placeholder='minprice' />
            <input type="number" name='maxprice' min={0} max={1000000} placeholder='maxprice' />
        </form>
        <button>
            <img src="./search.png" alt="" />
        </button>
    </div>
  )
}

export default Searchbar