let socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newStatus', function (status) {
    console.log(status);
});

let stopButton = jQuery('#stop-status');
  stopButton.on('click', function () {
    socket.emit('stopStatus');
});