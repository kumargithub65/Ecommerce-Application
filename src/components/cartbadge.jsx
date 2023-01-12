import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function SimpleBadge(props) {
  return (
    <Badge badgeContent={props.counttt} color="primary">
  <span className="material-symbols-outlined">
                        shopping_cart
                      </span>
    </Badge>
  );
}