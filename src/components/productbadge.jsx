import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import "./css/home.css";
export default function ProductBadge(props) {
    console.log(props.quna)
  return (
    <Badge badgeContent={2} color="primary">
     <span className="material-symbols-outlined cart">shopping_cart</span>
    </Badge>
  );
}