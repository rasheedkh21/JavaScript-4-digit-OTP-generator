function otpGenerate() {
    let otpShow=document.getElementById("otp");
    let digits="0123456789";
    let otp="";
    // Generate 4 digits OTP
    for (let i=0; i<4; i++) {
        otp += digits[Math.floor(Math.random()*10)];
    }

    // TO display loader
    otpShow.innerHTML="<span></span>";

    // Display otp after 1 second
    setTimeout(() =>{
        otpShow.innerHTML =otp;
    },1000);
}