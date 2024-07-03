import './listPage.scss'
import { listData } from '../../lib/dummydata'
import Filter from '../../components/Filter/filter';
import Card from '../../components/Card/Card';
import Map from '../../components/Map/map';

function ListPage(){
  const data = listData;
  return (
    <div className='listPage'>
      <div className="listcontainer">
        <div className="wrapper">
          <Filter/>
          {
            data.map(item=>(
              <Card key={item.id} item={item}/>
            ))
          }
          </div>
        </div>
      <div className="mapcontainer">
        <Map items={data}/>
      </div>
    </div>
  )
}

export default ListPage