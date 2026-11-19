// Tiny PeerJS signaling server. Deploy free on Render/Railway/Fly (start command: npm start),
// then add {host:'your-app.onrender.com',port:443,secure:true,path:'/'} to SV in index.html.
const {PeerServer}=require('peer');
PeerServer({host:'0.0.0.0',port:process.env.PORT||9000,path:'/',proxied:true});
