



$("#result")
 $.ajax({
        // URL de la requête
       url: "https://pokeapi.co/api/v2/berry/1",
        // methode d'envoi (type de requère)
      method: "GET",
        // format de réponse attendu
      dataType: "json",
    })
   .done(function( data ) {
      if ( console && console.log ) {
         console.log( "Sample of data:", data.slice( 0, 100 ) );
        }
     })
}


