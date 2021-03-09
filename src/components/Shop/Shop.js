import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/courseData.json';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Shop.css';

const Shop = () => {
    // console.log(fakeData);
     const [course,setCourse] =useState([]);
     const [cart,setCart] =useState([]);
   // console.log(course);

   const handleButton=(course)=>{
       const newCart =[...cart,course];
      // console.log(newCart);
      setCart(newCart);

   }
    useEffect(()=>{
        setCourse(fakeData)
      // console.log(course);
    },[])
    return (
        <div className="shop ">
            
        <div className="course-countainer">
        {course.map(course => (<Course course={course}  handleButton={handleButton}></Course>))}
        </div>
        <div className="cart-container">
            <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Shop;