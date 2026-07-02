const axios=require("axios");
const logdata=async(req,res)=>{
    const {stack,level,package,message}=req.body;
    if(!stack||!level||!package||!message){
        return res.status(400).json({error:"Required fields are missing"});
    }
    try{
        const response=await axios.post("http://4.224.186.213/evaluation-service/logs",
            {stack,level,package,message},
        {
            headers:{
                "token_type":"Bearer",
                "access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzEyMDY2QG5lYy5lZHUuaW4iLCJleHAiOjE3ODI5NjkyMDgsImlhdCI6MTc4Mjk2ODMwOCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImVkMTk0YWM0LTA1ZGEtNGZhZC1iMmY1LWVkZTQ5ZDExMzkwOSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFuaXRoYSBtIiwic3ViIjoiZDVkMWY3YTAtNmE2NS00NTAyLWJjN2EtY2M0MmUwYzdlZmMyIn0sImVtYWlsIjoiMjMxMjA2NkBuZWMuZWR1LmluIiwibmFtZSI6ImFuaXRoYSBtIiwicm9sbE5vIjoiMjMxMjA2NiIsImFjY2Vzc0NvZGUiOiJFUnpVeXgiLCJjbGllbnRJRCI6ImQ1ZDFmN2EwLTZhNjUtNDUwMi1iYzdhLWNjNDJlMGM3ZWZjMiIsImNsaWVudFNlY3JldCI6InNYZHl2cGNOUWNlZkhCRW0ifQ.rPfcCteNnMvK7ZxnKYU8V9_TVWcSwPLBZbbdeGpV4SQ"
            }
        });
        console.log(` Logged Data -> [${stack}] [${level}] [${package}] ${message}`);
     console.log(`Response Log Data `,response.data)

    res.status(200).json({
      message: "Successfully sent log",
      data: response.data
    });
    
  }catch(error){
    console.error(" Failed to send log:", error.message);
    res.status(500).json({ 
      message: "Failed to send log", 
      error: error.message 
    });
  }
};
module.exports={
  logdata,
};
