// -----to another page fuction-----

function to_page(link)
{
    // console.log(link);
    window.location.href = link;

}
//------ to the specified link
function to_link(link)
{
    window.open(link);
}


// ---------div close------

function div_close(div_class)
{
    document.querySelector(div_class).style.display="none";
}

// ---------- div open--------

function div_open(div_class)
{
    document.querySelector(div_class).style.display="flex";
}

//-----------page refresh------

function refresh_page() {
    location.reload();
}