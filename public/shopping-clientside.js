function searchByPerson()
{
    console.log('Searching for your person..');

   var name = $('#name').val();
   console.log('Name: ' + name);

    //search comes from the server.js page
    $.get('/search',{name: name}, function(data){
        console.log('Back: ');
        console.log(data);

        if(data.list.length > 0)
            {
                for(var i = 0; i < data.list.length; i++)
                {
                var person = data.list[i];
                $('#ulPerson').append('<li>' + person.person_name + '</li>');
                }
            }
        else
            {
               $('#ulPerson').append('<li>' + name + ' is not found' + '</li>');
            }
    });
}

function addNewPerson()
{
    console.log('Inside addNewPerson function..');

    var name = $('#name').val();
    console.log('Name: ' + name);

    //person comes from the server.js page
    $.post('/person',{name: name}, function(data){
        console.log('Back: ');
        console.log(data);

        if(data)
            {
                $('#ulPerson').append('<li>' + name + ' has been added' + '</li>');
                }
    });
}


function addNewProduct()
{
    console.log('Inside addNewProduct function..');

    var name = $('#product').val();
    console.log('Product: ' + product);

    //person comes from the server.js page
    $.post('/product',{name: name}, function(data){
        console.log('Back: ');
        console.log(data);

        if(data)
            {
                $('#ulPerson').append('<li>' + name + ' has been added' + '</li>');
                }
    });
}


