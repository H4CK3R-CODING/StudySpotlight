import data from "../utils/data.js";

const getSub = (req,res) => {
  try {
    const {sem, branch} = req.body;


    const d = data[branch][sem];
    
    // data.map((ele)=>{
    //     const keys = Object.keys(ele);
    //     console.log(keys);
    //     keys.forEach((key)=>{
    //         if(key == branch){
    //             console.dir(ele);
    //             return ele;
    //         }
    //     })
    // })


    res.status(200).json(d)
  } catch (error) {
    console.log("Error occur in the getSub.controller.js ====>  " + error.message);
  }
}

export default getSub
