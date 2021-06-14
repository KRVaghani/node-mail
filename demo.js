var nodeMailer = require('nodeMailer');
var transport = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'<email>',
        pass:'<your password>',
    }
});
var mailOptions = {
    from: '<email>',
    to:'<email>',
    subject: '<subject type>',
    text:'<message>'
}
transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.warn(error);
    }
    else{
        console.warn("email has been send",info.response);
    }
})