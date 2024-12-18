
//const  ChildComponent = (props:any) =>{
  //console.log(props)
    //return(
      //<div>

           // <h1 className="text-5xl p-2">
            //    {props.name}
           // </h1>
           // <h6 className="text-3xl p-2">
             //   {props.address}
           //  <h6 className="text-3xl p-2">
             //  {props.rollNo}
            //</h6>
           // <p className="text-3xl p-2">{props.name}</p>
          // <h6 className="text-3xl p-2">{props.rollNO}</h6>
           // <h6 className="text-3xl p-2">{props.address}</h6>




        //</div>
   // )
//}
//export default ChildComponent//

//data pass parent to child always


const  ChildComponent = (props:any) =>{
    console.log(props)
      return(
          <div>
  
              <h1 className="text-5xl p-2">
                  {props.CarName}
              </h1>
              <h6 className="text-3xl p-2">
                  {props.price}
              </h6>
              <p className="text-3xl p-2">{props.image}</p>
              <p className="text-3xl p-2">{props.reviews}</p>
  
  
          </div>
      )
  }
  export default ChildComponent
  
  //data pass parent to child always