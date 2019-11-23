function searchByPerson()
{
    console.log('Searching for your person..');

   var name = $('#name').val();
   console.log('Name: ' + name);

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


