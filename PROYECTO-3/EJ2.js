let btnCalcular= document.getElementById("calcular");
let btnNuevo= document.getElementById("nuevo");
let montoDescuento=0;
let montoBruto=0;
let montoIGV=0;
let montoTotal=0;
let acumular_total=0;

btnCalcular.addEventListener("click",function(){
    let articulo= document.getElementById("articulo").value;
    let cantidad= document.getElementById("precio").value;
    let precio= document.getElementById("cantidad").value;
    let tbody= document.getElementById("tbody");
    montoDescuento=0;
    let igv=0.18;
    let subtotal=cantidad*precio;
    acumular_total+=subtotal;
    montoIGV= acumular_total*igv;
    montoBruto= acumular_total + montoIGV;
    if(montoBruto>500) montoDescuento=montoBruto*0.05;
    montoTotal = montoBruto -  montoDescuento;

    tbody.innerHTML += `<tr>
        <td>${articulo}</td>
        <td>${cantidad}</td>
        <td>${precio}</td>
        <td>${subtotal}</td>
    <tr>`;

    document.getElementById("desc_total").innerText= "S/. " + acumular_total;
    document.getElementById("desc_igv").innerText= "S/. " + montoIGV;
    document.getElementById("desc_descuento").innerText= "S/. " + montoDescuento;
    document.getElementById("desc_montoBruto").innerText= "S/. " + montoBruto;
    document.getElementById("total_pagar").innerText= "S/. " + montoTotal;
});


btnNuevo.addEventListener("click",function(){
    montoDescuento=0;
    montoBruto=0;
    montoIGV=0;
    montoTotal=0;
    acumular_total=0;
    document.getElementById("tbody").innerHTML="";
    document.getElementById("desc_total").innerText= "";
    document.getElementById("desc_igv").innerText= "" ;
    document.getElementById("desc_descuento").innerText= "";
    document.getElementById("desc_montoBruto").innerText= "";
    document.getElementById("total_pagar").innerText= "";
});