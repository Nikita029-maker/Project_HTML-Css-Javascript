var users=[

    {

        id: 1,
        name:"Nikita",
        email:"nikita.parmar@gmail.com",
        password: "123"
    },
    {
    id: 2,
    name:"admin",
    email:"admin123@gmail.com",
    password: "1234"
    }

]

var tbody=document.getElementById("tbody")


var students=[

    {
        id: 1,
        name:"Nikita",
        email:"nikita.parmar@gmail.com",
        mobile: 9825346890

    },
    {
        id: 2,
        name:"varsha",
        email:"varsha.parmar@gmail.com",
        mobile: 9825589670
    },
    {
        id: 3,
        name:"krishu",
        email:"krishu.parmar@gmail.com",
        mobile: 98456734689
    },
    {
        id: 4,
        name:"Nishu",
        email:"Nishu.parmar@gmail.com",
        mobile: 9845667346
    }
]
    

function registration()
{
    event.preventDefault()
    console.log("Registration call")

    var name=document.getElementById("name").value
    var email= document.getElementById("email").value
    var password= document.getElementById("password").value

    var temp=
    {
        id:users.length+1,
        name:name,
        email:email,
        password:password
    }
    users.push(temp)
    clr();
    Swal.fire(
        'Good job!',
        'Registration Done!',
        'success'
    )
}
function Login()
{
    event.preventDefault()
    var email=document.getElementById("email1").value
    var password=document.getElementById("Password1").value

    var newarr = users.filter(item=>item.email==email && item.password==password)

if(newarr.length>=1)
{
    localStorage.setItem("email",email)
    window.location.href="dashboard.html"

}
else
{
Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
}
console.log(newarr)
}



function clr()
{
    document.getElementById("name").value=""
    document.getElementById("email").value=""
    document.getElementById("password").value=""
}

function display()
{
    for(var i=0;i<students.length;i++)
    {
        createRow(students[i])
    }
}
function logout()
{
    localStorage.removeItem("email",email)
    window.location.href="index.html"
}
function Auth()
{
    console.log("Auth call")
    var name=localStorage.getItem("email")
    if(name=="null"||name==undefined||name==null)
    {
        window.location.href="index.html"
    }
    else
    {
        console.log("getdata"+"  "+ name)
        document.getElementById("useremail").innerHTML=name
    }
}
function insert()
{
    var semail=document.getElementById("email").value
    var sname=document.getElementById("name").value
    var smobile=document.getElementById("mobile").value
    var temp={
        email:semail,
        name:sname,
        mobile:smobile

    }
    createRow(temp)
    
}
function createRow(std)
{
    var tr=document.createElement("tr")


    var td=document.createElement("td")
    var data=document.createTextNode(std.name)
    td.appendChild(data)
    tr.appendChild(td)

    
    var td=document.createElement("td")
    var data=document.createTextNode(std.email)
    td.appendChild(data)
    tr.appendChild(td)

    var td=document.createElement("td")
    var data=document.createTextNode(std.mobile)
    td.appendChild(data)
    tr.appendChild(td)


    var td=document.createElement("td")
    var deletebtn=document.createElement("button")
    td.appendChild(deletebtn)
    deletebtn.innerHTML="Delete"
    deletebtn.classList.add("btn")
    deletebtn.classList.add("btn-danger")
    deletebtn.classList.add("mx-4")
    deletebtn.onclick=()=>{
        var result=confirm("are you sure you want to delete data?")
        if(result)
        {
            var row=deletebtn.closest("tr")
            console.log(row)
            row.remove()

        }
    }


    var updateBtn=document.createElement("button")
    td.appendChild(updateBtn)
    updateBtn.innerHTML="Update";
    updateBtn.classList.add("btn")
    updateBtn.classList.add("btn-info")

    
    

    tr.appendChild(td)

    tbody.appendChild(tr)









}




