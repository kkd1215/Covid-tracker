import React from 'react';
import './InfoBox.css';
import { Card, CardContent, Typography } from '@material-ui/core';

function InfoBox({ title, cases, active, total, isRed, isOrange, ...props }) {
  return (
    <Card onClick= {props.onClick} className= {`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'} ${isOrange && 'infoBox--orange'}`}>
      <CardContent>

        <Typography className='infoBox__title' color='textSecondary'>
          {title}
        </Typography>

        <h2 className= {`infoBox__cases ${!isRed && !isOrange && 'infoBox__cases--green'} ${isOrange && 'infoBox__cases--orange'}`}>
          {cases}
        </h2>

        <Typography className='infoBox__total' color='textSecondary'>
          {total} Total
        </Typography>

      </CardContent>
    </Card>
  )
}


export default InfoBox;
