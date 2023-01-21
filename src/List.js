//to show image one by one in list(props used)
const List=({title,type,year,image,rating})=>{
return(
    <div style={{color:'white'}}>

        <h2>{title}</h2>
        <div>
            <img src={image !=="N/A" ? image:"https://via.placeholder.com/400"}
            alt={title}/>
        </div>
        
        <p>{type}</p>
        <p>{year}</p>
        <p>{rating}</p>
    </div>
)
}
export default List