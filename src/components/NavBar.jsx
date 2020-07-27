import React from 'react'



const style={
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottom: 'inset 1px rgb(45 45 45)',
    padding: '10px 15px',


} 


export default class NavBar extends React.Component{
  render(){
        return(
            <div style={style} >         
                <div>
                  icono
                </div>
                <span style={{    fontWeight: 'bolder', fontFamily: 'inherit'}}> FALTA EL TITULO </span>
                <div>
                  opciones
                </div>
            </div>
        )
    }
}


