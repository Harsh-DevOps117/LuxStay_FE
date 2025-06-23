
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface FullScreenLoaderProps {
  isLoading: boolean;
}

const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({ isLoading }) => {
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isLoading]); 

  if (!isLoading) {
    return null; 
  }

  return createPortal(
    <div
      
      
      className="fixed inset-0 bg-black/10 backdrop-blur-md flex items-center justify-center z-[1000]"
    >
      <div
        
        className="w-20 h-20 border-4 border-t-4 border-t-black border-gray-200 rounded-full animate-spin-slow"
      ></div>
    
      
    </div>,
    document.body
  );
};

export default FullScreenLoader;
