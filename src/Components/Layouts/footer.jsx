import React from 'react'

function Footer() {
  return (
   <footer>
    <div className="about">
        <h2>ABOUT ME</h2>
        <p>
        Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,
        </p>
        <p>Copyright ©2023 All rights reserved | This template is made with  by</p>
        <span>Colorlib</span>


    </div>
    <div className="newsletter">
        <h2>NEWSLETTER</h2>
        <p>Stay updated with our latest trends</p>
        <div className="input">
            <input type="text" />
            <button><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        
    </div>
    <div className="follow-me">
        <h2>FOLLOW ME</h2>
        
        <div className="info">
        <p>Let us be social</p>
        <div className="icons">
        <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-solid fa-basketball"></i>
            <i class="fa-solid fa-globe"></i>   
        </div>
      
        </div>

    </div>





   </footer>
  )
}

export default Footer