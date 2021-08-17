// this page will show the all the memories they have put together. 
// add to adventures to adventure book will be a button that will take you back to the user's home page 
import { useHistory } from "react-router";
import React from "react";


const ReviewPage = () => {
    let history = useHistory();
    const handleClick =() => {
        history.push("/");
    }
    return(
      <html lang="en">

      <head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
      
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"/>
      
          <h2 className="display-6">Review Your Adventure</h2>
      </head>
      
      <body>
          <div class="container col-sm-8">
              <h2 className="display-6"> Review Your Adventure </h2>
              <div class="accordion" id="accordionSection">
                  <div class="accordion-item mb-3">
                      <h2 class="accordion-header">
                          <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne">Day 1</button></h2>
                      <div class="accordion-collapse collapse" id="collapseOne" data-bs-parent="#accordionSection">
                          <div class="accordion-body">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          </div>
                      </div>
      
                  </div>
                  <div class="accordion-item  mb-3">
                      <h2 class="accordion-header">
                          <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Day 2</button></h2>
                      <div class="accordion-collapse collapse" id="collapseTwo" data-bs-parent="#accordionSection">
                          <div class="accordion-body">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          </div>
                      </div>
      
                  </div>
                  <div class="accordion-item">
                      <h2 class="accordion-header">
                          <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">Day 3</button></h2>
                      <div class="accordion-collapse collapse" id="collapseThree" data-bs-parent="#accordionSection">
                          <div class="accordion-body">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          </div>
                      </div>
      
                  </div>
              </div>
          </div>
      
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
      
      </body>
      
      </html>
    );
    }
    
    
    export default ReviewPage;