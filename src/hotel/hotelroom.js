import {
  Environment,
  useGLTF,
  PresentationControls,
  useAnimations,
} from "@react-three/drei";
import room from "./hotelroom.glb";
import React, { useEffect, useState, Suspense, useRef } from "react";



function Room() {
  const room1 = useGLTF(room);

  
  
  return (
    <>
      <Environment preset="city" />
      
      <primitive 
       
        object={room1.scene}
        position-y={-3}
        position-x={-11}
        position-z={8}
      ></primitive>
    </>
  );
}

export default Room;
