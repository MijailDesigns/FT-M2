$('#boton').click(function () {
    //console.log('funciona')
    $("img").hide(); //pasa ocultar la img
    $("#lista").html(""); // deja el ul vacio antes de cargar la info
    //o usa .empty()
    $.get("http://localhost:5000/amigos", function (data) {
        data.map(d => $("#lista").append(`<li id ="${d.id}">${d.name}</li>`))
   
    });
});

$('#search').click(function () {
    let id = $("#input").val();
    // console.log(id);
    // console.log(id[0]);
    //console.log(id[0].value);

    // $.get(`http://localhost:5000/amigos/${id[0].value}`, function (data) {
    //     console.log(data);
    //     $("#amigo").text(data.name); //agrega dta.name al contenido del #amigo
    //     id[0].value = "";  // deja el input vacio
    //     // var title = document.createElement('h3');
    //     // title.textContent = data.name;
    //     // $("body").append(title);
   
    // });

    $.get(`http://localhost:5000/amigos/${id}`)
    .then( function(data) {
        $("#amigo").text(data.name);
        id = "";
    } )
    .catch( function() {
        $("#amigo").text('No existe el amigo');
    } );
});

$('#delete').click(function () {
    let id = $("#inputDelete");
    // console.log(id);
    // console.log(id[0]);
    console.log(id[0].value);  // .val() de jquery me devuelve el valor del input

    $.ajax({
        url: 'http://localhost:5000/amigos/' + id[0].value,
        type: 'DELETE',
        success: function(data) {
          $("#success").text("Tu amigo fue borrado con exito");
          id[0].value = "";
        }
      });
});


$('#nuevo').click(() => {
    let nombre = $("#inputNuevo").val();
    let edad = $("#inputNuevo2").val();
    let mail = $("#inputNuevo3").val();
    let friend = {name:nombre, age:edad, email:mail};


    $.ajax({
        url: 'http://localhost:5000/amigos/',
        type: 'POST',
        data: JSON.stringify(friend),
        contentType: "application/json",
        success: () => {
          $("#successNuevo").text(`Se agrego a ${nombre}`);
        }
      });
});