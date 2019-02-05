$.socket = new Object()

$(document).ready(function(){
    $.socket = io.connect('https://' + document.domain + ':' + location.port + '/socket'); //set up a socket for later usage
    $.socket.on('message-response', function(msg) {
        newDiv = $( "<div />" ).text(msg['text']) //create a new div with response text
        .addClass('small-box light-mid-bg hilight-fg box-shadow text-shadow') //styling
        .addClass('margin-half small-margin-vertical') //horizontal and vertical margins
        .addClass('flex center flex-grow-2') //font centering and automatic resizing
        .addClass('pulse-in-3') //add animation
        $('#responses').append(newDiv)
    })
})

$(document).ready(function(){
    $('#button').click(function(){
        if($('#text-input').val() == ''){
            return; //don't send empty messages
        }
        $.socket.emit('message', {'text' : $('#text-input').val()}) //send text to backend
    })
})

$(document).ready(function(){
    $('#clear-button').click(function(){
        $('#responses').children().each(function(){
            $(this).remove()
        })
    })
})