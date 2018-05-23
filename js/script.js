const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
//<label><input type='checkbox'> Allow PDF downloads</label>
const $label = $("<label><input type='checkbox'>Allow PDF downloads</label>");


$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$odd.css('backgroundColor', 'lightgray');

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function (event) {
  //check if the checkbox has been checked
  //if zero checkboxes are checked
  if ($(':checked').length === 0) {
    //prevent download of document
    event.preventDefault();
    //alert the user
    alert("Please check the box to allow pdf downloads.");
  }

});

$('#links').append($label);

//the each method is the simplified way of the 'for method' to Loop through a jQuery collection

$('a').each(function (index, link) {
  //  console.log(index, $(link).attr('href'));
  const url = $(link).attr('href');
  $(link).parent().append(`(${url})`);
});
// or we can use 'this' instead of link
// $('a').each(function(){
//   const url = $(this).attr('href');
//     $(this).parent().append(`(${url})`)
//   });