import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GradeIcon from '@mui/icons-material/Grade';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ApiIcon from '@mui/icons-material/Api';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/amazonSlice';

function Products() {
  const dispatch = useDispatch()
  const data = useLoaderData();
  const productData = data.data;

  return (
    <div className='max-w-screen-2xl mx-auto 
    grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10'>
      {productData.map((item) => (
        <div key={item.id} 
        className='bg-white h-auto border-[1px]
         border-gray-200 py-8 z-30
          hover:border-transparent shadow-none
           hover:shadow-testShadow duration-200 
           relative '>
            <span className='text-xs capitalize italic absolute top-2 right-2 text-gray-500'>
              {item.category}
            </span>
          <div className='w-full h-auto flex items-center justify-center relative group'>
            <img className='w-52 h-64 object-contain'
             src={item.imageURL}
              alt="ProductImg" />
            <ul className='w-full h-36 bg-gray-100 absolute hidden
                  bottom-[-170px]  flex-col items-end justify-center gap-2
                         font-titleFont px-2 border-1 border-r 
                          group-hover:bottom-0 duration-200 z-20'>

              <li className='productLi'>
                Compare <span><ApiIcon/></span>
              </li>
              <li className='productLi'>
                Add to Cart <span><ShoppingCartIcon/></span>
              </li>
              <li className='productLi'>
                View Details <span><ArrowCircleRightIcon/></span>
              </li>
              <li className='productLi'>
                Add to wish List <span><FavoriteIcon/></span>
              </li>
             </ul>
            
          </div>
          <div className='px-4 z-30 bg-white '>
            <div className='flex items-center justify-between'>
              <h2>{item.title.substring(0, 20)}</h2>
              <p className='text-sm text-gray-600 font-semibold'>${item.price}</p>
            </div>
          </div>
          <div className='px-4 z-30'>
            <p className='text-sm'>{item.description.substring(0, 100)}...</p>
            <div className='text-yellow-500 flex'>
              <GradeIcon />
              <GradeIcon />
              <GradeIcon />
              <GradeIcon />
              <GradeIcon />
            </div>
          </div>
          <button onClick={()=> dispatch(addToCart({
            id:item.id,
            title:item.title,
            description:item.description,
            price:item.price,
            category:item.category,
            image:item.imageURL,
            quantity:1
          }))} className='w-full font-titleFont font-medium text-base bg-gradient-to-tr
           from-yellow-400 to-yellow-200
            border hover:from-yellow-300 border-yellow-500
           hover:border-r-yellow-700 active:bg-gradient-to-bl
           active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3'>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;

