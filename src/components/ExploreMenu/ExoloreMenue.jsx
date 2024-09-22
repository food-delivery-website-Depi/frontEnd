import React from "react";
import "./ExoloreMenue.css";
import { menu_list } from "../../assets/food del assets/frontend_assets/assets";


const ExoloreMenue = ({category, setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, earum
        facilis? Saepe magnam quod corrupti, accusantium recusandae minima
        impedit dicta voluptates aut ipsum ad nesciunt non sed vitae omnis
        mollitia?
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className="explore-menu-list-item">
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExoloreMenue;
