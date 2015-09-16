//add a link icon to the right of every link
//turn it blue when you mouse over the link text
$(function() {
    $( "a" ).hover(
        function() {
            $( this ).children(".fa-external-link").addClass( "blue" );
        },
        function() {
            $( this ).children(".fa-external-link").removeClass( "blue" );
        }
    );

    $( "a" ).append("<i class='fa fa-external-link'></i>");
});
