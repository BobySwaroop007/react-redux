import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux';
import { addToCart } from './actions';
import { deleteCart } from './actions';
import { Remove } from './actions';
const Home = () => {
    const [price, setPrice] = useState(0);
    const myState = useSelector((state)=> state.fetchDate);
    const myState2 = useSelector((state)=> state.itemAdded.carts);
    console.log(myState2);
    const dispatch = useDispatch();

    const total = ()=>{
        let price = 0;
        myState2.map((ele,k)=>{
            price = ele.price* ele.quantity + price; 
        });
        setPrice(price);
    };
    useEffect(()=>{
        total();
        console.log(price);

    },[total])

  return (
    <>
<div className='py-10  grid grid-cols-12 gap-6'>
    <div className='col-span-8'>
        <div className="grid lg:grid-cols-2 gap-8 md:grid-cols-2 sm:grid-cols-1 px-48">
         
            {myState.map((val,id)=>
    <div key={id} className='bg-blue-200 max-w-sm rounded shadow-xl'>
    <img src={val.image} className='w-full h-52 object-cover rounded-t-lg'></img>
    <p className='text-xl font-semibold font-sams  pt-4'>Fruit Name: {val.fruit}</p>
     <div className="grid grid-cols-2 pt-3 pb-4">
        <p className='font-semibold mt-2'>Price:{val.price}</p>
        <button class="rounded-full ... bg-orange-400 hover:bg-orange-300 font-medium p-2 mr-2" onClick={()=>{dispatch(addToCart(val))}}>Add to cart</button>

     </div>
    </div>
            )}
        
          
</div>
</div>

<div className='col-span-4 bg-slate-200'>
<div className="grid grid-cols-1 gap-8 px-24">
    <h2>{myState2.length}</h2>
    {myState2.length == 0  ? <h2>No cart add</h2>
    : 
    myState2.map((data,id)=>
        <div key ={id} className='bg-blue-300 w-84 rounded shadow-xl mt-4'>
        <img src={data.image} className='w-full h-52 object-cover rounded-t-lg'></img>
        <p className='text-xl font-semibold font-sams  pt-4'>Fruit Name: {data.fruit}</p>
         <div className="grid grid-cols-2 pt-3 pb-4">
            <p className='font-semibold mt-1'>Price: {data.price}</p>
            <button class="rounded-full ... bg-red-600 hover:bg-red-500 text-white font-medium p-1 mr-2" onClick={()=>{dispatch(deleteCart(data.id))}}>Remove cart</button>
         </div>
         <div className='bg-blue-200  rounded shadow-xl mx-auto'>
<div className='grid grid-cols-2 w-84 bg-indigo-200 mt-4'>
    <p className='font-semibold'>Total items : </p>
    <p className='font-semibold'>{data.quantity}</p>
    <p className='font-semibold'>you saved</p>
    <p className='font-semibold'>Rs.50</p>
    <p className='font-semibold'>Sub total price :</p>
    <p className='font-semibold'>Rs. 
    {data.price * data.quantity}</p>
    <div className='bg-blue-400'>
        <span className='' onClick={()=>{{data.quantity <=1 ? dispatch(deleteCart(data.id)) : dispatch(Remove(data))}}}>-</span>
        <span className=''>{data.quantity}</span>
        <span className='' onClick={()=>{dispatch(addToCart(data))}}>+</span>
        
    </div>

</div>

</div>
         
        </div> 
        
      
    )
    }
</div>
  <div>Total Price is : {price}</div>

</div>

</div>
    </>
  )
}

export default Home