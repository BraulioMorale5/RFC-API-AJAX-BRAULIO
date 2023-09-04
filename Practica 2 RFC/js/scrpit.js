/* FUNCIONAMIENTO DEL RFC*/
$(document).ready(function(){
    $('#btn').click(function(){
        var nombre = document.getElementById("nom").value;/*OBTENIENDO LOS ID DE LOS INPUTS EN NUEVAS VARIABLES*/
        var appat = document.getElementById("app").value;
        var apmat = document.getElementById("apm").value;
        var fecha = document.getElementById("fech").value;
        var nomsub = nombre.substring(0,1);/*UTILZANDO LA FUNCION SUBSTRING PARA EXTRAR LOS PRIMEROS VALORES DE CADA INPUTS*/
        var appatsub = appat.substring(0,2);
        var apmatsub = apmat.substring(0,1);
        var fechasub = fecha.substring(0,10);
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"/*ALFABETO*/
        var letra = alphabet[Math.floor(Math.random() * alphabet.length)]/*FUNCION PARA OBTENER UNA LETRA AL AZAR DEL ALFABETO*/
        var letra2 = alphabet[Math.floor(Math.random() * alphabet.length)]
        var random= Math.random() * 10;/*FUNCION PARA OBTENER UN NUMERO DEL 1 AL 10 DE MANERA ALEATORIA*/
        var numero = parseInt(random)/*CONVERTIR EL NUMERO ALEATORIO OBTENIDO EN ENTERO*/
        $('#rfc').val(appatsub+apmatsub+nomsub+fechasub+letra+letra2+numero);/*UNIR LOS VALORES EXTRAIDOS POR SUBSTRING, LAS LETRAS Y NUMERO ALEATORIOS*/
    })

    /*FUNCIONAMIENTO DE LA API REST*/
    $("#btn2").click(function(){ /*FUNCION QUE REALIZA UNA ACCION DESPUES DE PRESIONAR EL BOTON INDICADO*/
        var id = document.getElementById("buscar").value;/*OBTENER EL VALOR DEL ID DEL INPUT INDICADO*/
        $.ajax({/*FUNCION PARA CONECTARSE A LA API REST*/
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users/"+ id,/*UNIR EL URL DE LA API REST CON EL ID OBTENIDO DEL INPUT*/
            dataType:"json",
            success:function(data){/*FUNCION PARA OBTENER LOS DATOS DEL NOMBRE Y EL EMAIL DE LA API REST*/
                var in1 = "" + data.name + "";
                var in2=  "" + data.email + "";
                $('#name').append(in1);/*COLOCANDO LOS VALORES OBTENIDOS DE LA API REST EN LOS INPUTS SELECCIONADOS*/
                $('#email').append(in2);
            }
            
        })
    })

    /*FUNCION DEL BOTON DE LIMPIAR CAMPOS*/
    $("#btn3").click(function(){
        $('#buscar').val('');
        $('#name').empty();
        $('#email').empty();
    })

    /*FUNCION DEL BOTON DE LIMPIAR CAMPOS*/
    $("#limp").click(function(){
        $('#nom').val('');
        $('#app').val('');
        $('#apm').val('');
        $('#rfc').val('');
    })
});