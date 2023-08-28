const LoadRoom=async(req,res)=>{
    
   const  username = req.body.username
   const  roomname = req.body.roomname

    res.redirect(`/room?username=${username}&roomname=${roomname}`)
}

module.exports={
    LoadRoom
}