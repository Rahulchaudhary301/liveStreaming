const { RtcTokenBuilder, RtcRole } = require('agora-access-token');
const express = require('express');
const router = express.Router();

const APP_ID = '13c8b5b1a6634a779c67bb7de5494980';
const APP_CERTIFICATE = '15b4056294e74ed0a0d8552d2607c1eb';



// router.get('/token', (req, res) => {
//   const channelName = req.query.channel;
//   const uid = req.query.uid || 0;
//   const role = RtcRole.PUBLISHER;
//   const expirationTimeInSeconds = 3600;

//   const currentTimestamp = Math.floor(Date.now() / 1000);
//   const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

//   const token = RtcTokenBuilder.buildTokenWithUid(
//     APP_ID, APP_CERTIFICATE, channelName, uid, role, privilegeExpiredTs
//   );

//   res.json({ token });
// });




const token = async(req,res)=>{
      
  const channelName = req.query.channel;
  const uid = req.query.uid || 0;
  const role = RtcRole.PUBLISHER;
  const expirationTimeInSeconds = 3600;

  const currentTimestamp = Math.floor(Date.now() / 1000);
  const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

  const token = RtcTokenBuilder.buildTokenWithUid(
    APP_ID, APP_CERTIFICATE, channelName, uid, role, privilegeExpiredTs
  );

  res.json({ token });

 // console.log(token)

}





module.exports = {token};
