import React from "react";
import PropTypes from "prop-types";


function Food({name, picture ,rating}){
  
  return( 
  <div>
  <h3>I love {name}</h3>
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={name}/>
  </div> 
)
}

const foodLike =[{
  id:1,
  name: 'Kimchi',
  image: 'https://i.namu.wiki/i/VHpjq-zYFV-ZjthJlhftI5OL8XlgeXSpoSO7vGSO0PsJGPo69wTGVpbFceX96yuMcXRnZKjbwbtdCL-ylKUkkAtKFZkB1uydrLqgSLizuvwxTqRoSwBBZ1EVlsuD4AiG3HtkUSDDYo0y01YcpGIhQA.webp',
  rating : 4.3
},{
  id:2,
  name:'Samgyeopsal',
  image:'https://i.namu.wiki/i/vGy4kAbo4Ud8gdlwT3Mi1dvZacfxVN-JjLSOjGYX6tvXU8j1E2w6cDkh3iqNJH_VJ5SnyJ5_OIhRHafmKtH3COivOfwCKgJNzAaFwlLyWg7Rc2AD_4m_cqfogYyfBvV4ppuvflV4P_qtcMbKW0b1gA.webp'
,rating : 4.5
},{
  id:3,
  name:'Chicken',
  image:'https://i.namu.wiki/i/hdQkCi-HdqnYi4OapN8VKe03HOlkad8X8R_XUYYrHxuazB2H-72-5rpYTbYeRdtV_Ii_hNdSQm1q_FyQVtWYcKCZUq3nn5aRe6NUtwMnBf-v4mG2lNOjmHFHXQyYvJLCCeHitUWTjlsDs-x_5-_Giw.webp',
  rating : 4.2
},{
  id:4,
  name:'Doncasu',
  image:'https://i.namu.wiki/i/H26VUpYzDOjiqPfTOGCFW3yHKoBlGGDvMM9elVNv-4_PcmibamMFT6eiiCrxeFYtHRqJ_nNEnmv8T25a7l2udZkjGGGhgEqIalXCG6n_puVZ-nAIVazDK_WNKYYUajDTMSBbg1cYNJXbo-AVUljmYA.webp',
  rating : 4.5
},{
  id:5,
  name:'Kimbap',
  image:'https://i.namu.wiki/i/8w5dGPqUgSYNTQIzIzTF_mNBb43SGJqC0w3gFBTfggTDQzRcYyMwdTEubb0LIJPMF2n_ZgAhMLfroIo4403jn0cspt2J4EWu-0XJn2lFV79h4WVjQzROqG37qtdyD1YHGWUkAyIimjwIcSX9qs8mcg.webp',
  rating : 5
}

];  /**const는 상수 ->일정한 수 */

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image}  rating={dish.rating}/>
}


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {foodLike.map(renderFood)}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}
export default App;
