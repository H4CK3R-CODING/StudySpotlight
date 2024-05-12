import data from "../utils/data.js";


const getSub = (req,res) => {
  try {
    const {sem, branch} = req.body;


    const isBranch = data[branch];
    if(!isBranch){
      res.status(201).json({
        msg: "data not found"
      })
      return;
    }
    console.log(isBranch)
    
    const isSem = data[branch][sem];
    if(!isSem){
      res.status(201).json({
        msg: "data not found"
      })
      return;
    }
    console.log(isSem)

    res.status(200).send(isSem);
    
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

    // console.log(d)
    // if(!d){
    //   console.log(d)
    //   res.status(201).json({
    //     msg: "data not found"
    //   })
    // }
    // res.status(200).json({
    //   msg: "ksdjf"
    // })
  } catch (error) {
    console.log("Error occur in the getSub.controller.js ====>  " + error.message);
  }
}

export default getSub
