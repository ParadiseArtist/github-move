$(function(){
  
  //https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&format=json
  
  "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&callback=?"
  $('#search').click(function() {
    let searchTerm = $('#searchTerm').val();
    $.ajax({
      type: 'GET',
      url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&callback=?',
      async: false,
      dataType: 'json',
      success: function(data){
        let results = `<h1>Your Search Results for ${data[0]}</h1>`;
        for ( let i = 0; i < data[1].length; i++ ) {
          results += `<h2 style="text-decoration:underline;"><a style="color:#33FF66;" href='${data[3][i]}' target='_blank'>${data[1][i]}</a></h2>`;
          results += `<p>${data[2][i]}</p>`;
        }
        $('#searchResults').html(results)
        
      },
      error: function(error) {
        alert('Oops something went wrong\n' + error.status + ': ' + error.statusText);
      }
      
    })
  });
  //type enter on keyboard to search
});