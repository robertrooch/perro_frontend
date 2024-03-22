var url = "http://localhost:3302/api/perros";

function postPerro(){
        console.log(url);

        var myId = $('#id').val();
        var myNombre = $('#nombre').val();
        var myRaza = $('#raza').val();
        var myEdad = $('#edad').val();
        var myFoto = $('#foto').val();

        var myperro = {
                id: myId,
                nombre: myNombre,
                raza: myRaza,
                edad: myEdad,
                foto: myFoto
        };
        console.log(myperro);

        $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data){
                console.log(data);
                $('#resultado').html(JSON.stringify(data.perro));
        },
                data: JSON.stringify(myperro)
        });
}


function getPerros(){
        console.log(url);

        $.getJSON(url,
        function(json){
        console.log(json);

                var arrPerros = json.perros;

                var htmlTablePerros = '<table border=1>';
		

                arrPerros.forEach(function(item){
                console.log(item);
                        htmlTablePerros += '<tr>' +
                                '<td>' + item.id + '</td>' +
                                '<td>' + item.nombre + '</td>' +
                                '<td>' + item.raza + '</td>' +
                                '<td>' + item.edad + '</td>' +
                                '<td>' + '<img src='+item.foto+'>' + '</td>'+
                                '</tr>';
			
                });
                htmlTablePerros += '</table>';

                $('#resultado').html(htmlTablePerros);
		
        }
        );
}

