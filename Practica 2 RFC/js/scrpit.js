$(document).ready(function(){
    $('#btn').click(function(){
        var nombre = document.getElementById("nom").value;
        var appat = document.getElementById("app").value;
        var apmat = document.getElementById("apm").value;
        var fecha = document.getElementById("fech").value;
        var nomsub = nombre.substring(0,1);
        var appatsub = appat.substring(0,2);
        var apmatsub = apmat.substring(0,1);
        var fechasub = fecha.substring(0,10);
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var letra = alphabet[Math.floor(Math.random() * alphabet.length)]
        var random= Math.random() * 10;
        var numero = parseInt(random)
        $('#rfc').val(appatsub+apmatsub+nomsub+fechasub+letra+letra+numero);
    })

    $("#btn2").click(function(){
        var id = document.getElementById("buscar").value;
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users/"+ id,
            dataType:"json",
            success:function(data){
                var in1 = "" + data.name +"";
                var in2=  "" + data.email +"";
                $('#name').append(in1);
                $('#email').append(in2);
            }
            
        })
    })

    $("#btn3").click(function(){
        $('#buscar').val('');
        $('#name').empty();
        $('#email').empty();
    })

    $("#limp").click(function(){
        $('#nom').val('');
        $('#app').val('');
        $('#apm').val('');
        $('#rfc').val('');
    })
});