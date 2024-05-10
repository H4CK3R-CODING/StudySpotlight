import data from "../utils/data.js";

const getSub = (req,res) => {
  try {
    const {sem, branch} = req.body;


    const d = data[branch][sem];
    console.dir(d);
    
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


    res.status(200).json({
        sem,
        branch
    })
  } catch (error) {
    console.log("Error occur in the getSub.controller.js ====>  " + error);
  }
}

export default getSub
