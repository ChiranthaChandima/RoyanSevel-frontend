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
        setQuery((prev) => ({ ...prev, type: val}));
    }

  return (
    <div className='searchbar'>
        <div className="type">
            {
                types.map((type) => (
                    <button
                    key={type}
                    onClick={() => switchType(type)}
                    className={query.type === type ? "active" : ""}
                    >
                        {type}
                    </button>
                ))
            }
        </div>
        <form action="">
            <input type="text" name='location' placeholder='cityloaction' />
            <input type="number" name='minprice' min={0} max={1000000} placeholder='minprice' />
            <input type="number" name='maxprice' min={0} max={1000000} placeholder='maxprice' />
            <button>
            <img src="./search.png" alt="" />
             </button>
        </form>
    </div>
  )
}

export default Searchbar