
"use client"
import React from "react";
export function Icon(){

    function manejarClick(clickeado){

        console.log(clickeado)
        


    }


    return(
    <div style={{ display: "flex", gap: "10px", width: "30px", height: "30px"}}>      <img src="/images/busqueda.png" alt= "busqueda" onClick={() => manejarClick("busquedaClick")} />
      <img src="/images/menu.png" alt= "menu" onClick={() => manejarClick("menuClick")} />
      <img src="/images/shop.png" alt= "shop" onClick={() => manejarClick("ShopClick")} />
      
    </div>
    )



}