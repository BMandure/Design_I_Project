var modal = document.getElementById("modalHorario");
var link = document.getElementById("linkHorario");
var cerrar = document.getElementById("cerrarModalHorario");

link.onclick = function(){
    modal.style.display = "block";
}
cerrar.onclick = function()
{
    modal.style.display = "none";
}
window.onclick = function(event)
{
    if(event.target == modal)
        {
            modal.style.display = "none";
        }
}