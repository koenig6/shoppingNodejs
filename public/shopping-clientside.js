function searchByPerson()
{
    console.log('Searching for your person..');

   var name = $('#name').val();
   console.log('Name: ' + name);

    //search comes from the server.js page
    $.get('/search',{name: name}, function(data){
        console.log('Back: ');
        console.log(data);

        for(var i = 0; i < data.list.length; i++)
            {
                var person = data.list[i];
                $('#ulPerson').append('<li>' + person.person_name + '</li>');
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
    });


}

