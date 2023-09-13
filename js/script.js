const LuasPersegi = () => {
    var a = document.getElementById("InputValueLuas").value;
    if ( a === ""){
      document.getElementById("OutputValueLuas").innerHTML = "Masukkan panjang persegi";
    }
    else{
      var rumus = parseInt(a) * parseInt(a);
      document.getElementById("OutputValueLuas").innerHTML = rumus;
    }
}

const KelilingPersegi = () => {
    var a = document.getElementById("InputValueKeliling").value;
    if ( a === ""){
      document.getElementById("OutputValueKeliling").innerHTML = "Masukkan panjang persegi";
    }
    else{
      var rumus = 4 * parseInt(a);
      document.getElementById("OutputValueKeliling").innerHTML = rumus;  
    }
}

function ShowLuas() {
    var x = document.getElementById("WrapLuas");
    var y = document.getElementById("WrapKeliling");
    x.style.display = "block";
    y.style.display = "none";
  }

function ShowKeliling() {
    var x = document.getElementById("WrapLuas");
    var y = document.getElementById("WrapKeliling");
    y.style.display = "block";
    x.style.display = "none";
  }