import React, {useState, useEffect} from 'react'

import URL from '../../utils/URL'
import axios from 'axios'
const Card = () => {

const [list, setList] = useState([])
const [listPlus, setListPlus] = useState([])

useEffect(() => {
  HandleGetList()
}, [])

const HandleGetList = async() => {
  try {
    const response = await axios.get(`${URL}page=1`);

    let data = response.data.products.slice(0,2)

    setList(data);

  } catch (err) {
    console.log(err);
  }
}

const HandleGetListPlus = async() => {
  try {
    const response = await axios.get(`${URL}page=2`);

    let data = response.data.products.slice(0,2);

    document.getElementById("btn-api-plus").style.display = "none"


    setListPlus(data);

  } catch (err) {
    console.log(err);
  }
}


  return (
    <div>
      <div id="zoneListEmail" className="row">
        {
          list.map(item => 
            <div className="card">

    <div className="card-header">
      <img loading="lazy" src={'http:',item.image}/>
    </div>
    <div className="card-body">
     <span className="nameProduct">{item.name}</span><br/>
     <p className="descriptionProduct">{item.description}</p>
     <span className="oldPriceProduct">De: R$ {item.oldPrice}</span><br/>
     <span className="priceProduct">Por: R${item.price}</span><br/>
     <span className="creditProduct">
     ou ${item.installments.count}X de R$ 
     ${item.installments.value.toFixed(2)}
    </span><br/>
     <button className="btnProducts">Comprar</button>
     <br/>
     <br/>

    </div>
  </div>

            )
        }
         
        {
          listPlus ? (
           
          listPlus.map(item => 
            <div className="card">
            
            <div className="card-header">
              <img loading="lazy" src={'http:',item.image}/>
            </div>
            <div className="card-body">
             <span className="nameProduct">{item.name}</span><br/>
             <p className="descriptionProduct">{item.description}</p>
             <span className="oldPriceProduct">De: R$ {item.oldPrice}</span><br/>
             <span className="priceProduct">Por: R${item.price}</span><br/>
             <span className="creditProduct">
             ou ${item.installments.count}X de R$ 
             ${item.installments.value.toFixed(2)}
            </span><br/>
             <button class="btnProducts">Comprar</button>
             <br/>
             <br/>
            
            </div>
          </div>
            )
          ): (
            <div></div>
          )
        }
       
        <br/>
           
      </div>
       <div className="ContainerBtnList">
       <button id="btn-api-plus" onClick={HandleGetListPlus}
        className="btn-plus-products">
           Ainda mais produtos aqui!
           </button>
   </div>
   </div>
  )
}
export default Card