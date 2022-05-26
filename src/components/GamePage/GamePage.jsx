import React, { useEffect } from 'react';
import { Manager } from "socket.io-client";

import './GamePage.css';

function GamePage() {
  const manager = new Manager("http://localhost:3000/#/");
  const socket = manager.socket("/"); // main namespace

  useEffect(() => {
    
  }, []);

  return (
      <div>
        
      </div>
  );
}

export default GamePage;
