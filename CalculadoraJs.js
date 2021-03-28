function calcular(){
var valorProduto = document.getElementById('valor').value;
    var valorEntrada = document.getElementById('valorEntrada').value;
    var debitoAVista= 1.48;
    var x1 = 2.96;
    var x2 = 3.59;
    var x3 = 3.93;
    var x4 = 4.26;
    var x5 = 4.59;
    var x6 = 4.92;
    var x7 = 5.83;
    var x8 = 6.16;
    var x9 = 6.48;
    var x10 = 6.81;
    var x11 = 7.13;
    var x12 = 7.44;

    valorProduto = valorProduto - valorEntrada; 

    var rDebitoAVista = parseFloat(valorProduto) * parseFloat(debitoAVista) / 100 + parseFloat(valorProduto);
    var rx1 = parseFloat(valorProduto) * parseFloat(x1) / 100 + parseFloat(valorProduto);
    var rx2 = (parseFloat(valorProduto) * parseFloat(x2) / 100 + parseFloat(valorProduto));
    var rx3 = (parseFloat(valorProduto) * parseFloat(x3) / 100 + parseFloat(valorProduto));
    var rx4 = (parseFloat(valorProduto) * parseFloat(x4) / 100 + parseFloat(valorProduto));
    var rx5 = (parseFloat(valorProduto) * parseFloat(x5) / 100 + parseFloat(valorProduto));
    var rx6 = (parseFloat(valorProduto) * parseFloat(x6) / 100 + parseFloat(valorProduto));
    var rx7 = (parseFloat(valorProduto) * parseFloat(x7) / 100 + parseFloat(valorProduto));
    var rx8 = (parseFloat(valorProduto) * parseFloat(x8) / 100 + parseFloat(valorProduto));
    var rx9 = (parseFloat(valorProduto) * parseFloat(x9) / 100 + parseFloat(valorProduto));
    var rx10 = (parseFloat(valorProduto) * parseFloat(x10) / 100 + parseFloat(valorProduto));
    var rx11 = (parseFloat(valorProduto) * parseFloat(x11) / 100 + parseFloat(valorProduto));
    var rx12 = (parseFloat(valorProduto) * parseFloat(x12) / 100 + parseFloat(valorProduto));

    var rdx1 = rx1;
    var rdx2 = rx2 /2;
    var rdx3 = rx3 /3;
    var rdx4 = rx4 /4;
    var rdx5 = rx5 /5;
    var rdx6 = rx6 /6;
    var rdx7 = rx7 /7;
    var rdx8 = rx8 /8;
    var rdx9 = rx9 /9;
    var rdx10 = rx10 /10;
    var rdx11 = rx11 /11;
    var rdx12 = rx12 /12;
    
    document.getElementById('debito').value = rDebitoAVista.toFixed(2);
    document.getElementById('x1').innerHTML = rx1.toFixed(2);
    document.getElementById('x2').innerHTML = rx2.toFixed(2);
    document.getElementById('x3').innerHTML = rx3.toFixed(2);
    document.getElementById('x4').innerHTML = rx4.toFixed(2);
    document.getElementById('x5').innerHTML = rx5.toFixed(2);
    document.getElementById('x6').innerHTML = rx6.toFixed(2);
    document.getElementById('x7').innerHTML = rx7.toFixed(2);
    document.getElementById('x8').innerHTML = rx8.toFixed(2);
    document.getElementById('x9').innerHTML = rx9.toFixed(2);
    document.getElementById('x10').innerHTML = rx10.toFixed(2);
    document.getElementById('x11').innerHTML = rx11.toFixed(2);
    document.getElementById('x12').innerHTML = rx12.toFixed(2);

    document.getElementById('dx1').innerHTML = rdx1.toFixed(2);
    document.getElementById('dx2').innerHTML = rdx2.toFixed(2);
    document.getElementById('dx3').innerHTML = rdx3.toFixed(2);
    document.getElementById('dx4').innerHTML = rdx4.toFixed(2);
    document.getElementById('dx5').innerHTML = rdx5.toFixed(2);
    document.getElementById('dx6').innerHTML = rdx6.toFixed(2);
    document.getElementById('dx7').innerHTML = rdx7.toFixed(2);
    document.getElementById('dx8').innerHTML = rdx8.toFixed(2);
    document.getElementById('dx9').innerHTML = rdx9.toFixed(2);
    document.getElementById('dx10').innerHTML = rdx10.toFixed(2);
    document.getElementById('dx11').innerHTML = rdx11.toFixed(2);
    document.getElementById('dx12').innerHTML = rdx12.toFixed(2);
    
}