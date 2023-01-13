import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import "./css/home.css";

export default function SimpleBadge({ere}) {
  // console.log(ere)
  return (
    <div className='badas'>

    <Badge badgeContent={ere} color="primary">
  <span className="material-symbols-outlined">
                        shopping_cart
                      </span>
    </Badge>
          
    </div>
  );
}