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
