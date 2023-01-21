const API_URL=" http://www.omdbapi.com/?i=tt3896198&apikey=3a4b1069"

const Optimize=async (title)=>{
    const response=await fetch(`${API_URL}&s=${title}`);
   
    // console.log((`${API_URL}&s=${title}`))
    const data=await response.json(); //gets json file of the response
    const {Search}=data;
   // console.log(data.Search); //displays search obj(consists arrays which is obtained by loop) of json 
    return data.Search
}
export default Optimize