function searchByPerson()
{
    $('#ulPerson').empty();

    console.log('Searching for your person..');

    var name = $('#name').val();

   console.log('Name: ' + name);

    //search comes from the server.js page
    $.get('/search',{name: name}, function(data){
        console.log('Back: ');
        console.log(data);

        if(data.list.length > 0)
            {
                $('#ulPerson').append('<li>' + name + '</li>');
                for(var i = 0; i < data.list.length; i++)
                {
                var person = data.list[i];
                $('#ulPerson').append('<li>' + person.product_name + " " + person.store_name + '</li>');
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
    $('#ulPerson').empty();

    console.log('Inside addNewProduct function..');

    var product = $('#product').val();
    var name = $('#name').val();
    var store = $('#store').val();

    console.log('Product: ' + product);
     console.log('Name: ' + name);
     console.log('Store: ' + store);

    //person comes from the server.js page
    $.post('/product',{name: name, product:product, store:store}, function(data){
        console.log('Back: ');
        console.log(data);

        if(data)
            {
                $('#ulPerson').append('<li>' + name + '\'s gift has been added' + '</li>');
                }
    });
}


