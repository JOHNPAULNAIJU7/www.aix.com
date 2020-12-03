$(document).ready(function(){
    $("#gform").validate({
        rules:{
            fname:{
                required: true,
                minlength: 4,
                maxlength: 20,
            },
            ename:{
                required: true,
                email:true
            },
            pname:{
                required: true
            }
        },
        messages:{
            fname:{
                required: "This field is required",
                minlength: "Enter minimum 4 characters",
                maxlength: "Enter maximum 20 characters",
            },
            ename:{
                required: "This field is required",
                email:"Enter valid Email address"
            },
            pname:{
                required:"This field is required"
            }
        } 
    })
})
function clk(){
    
}