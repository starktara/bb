var testiminialMessages = [
    {
        name: 'Jai Kumar',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },{
        name: 'Jimi Hendrix',
        message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
        name: 'Buckethead',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },{
        name: 'David Gilmour',
        message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    },{
        name: 'Slash',
        message: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.'
    }
];
var carouselOptions = {
     shift: -150,
    padding: 800,
    dist: -200,
    onCycleTo: function(data){
        var index = $(data).attr('index');
        var message = testiminialMessages[index].message;
        var name = testiminialMessages[index].name;
        $('#clientName').empty().text(name);
        $('#testimonialMessage').empty().text(message);
    }
}
$(document).ready(function(){
    $('.slider').slider();
    $('.carousel').carousel(carouselOptions);
    //autoplay();
});
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 6000);
}

$('#slideLeft').on('click', function(){
    $('.carousel').carousel('prev');
});

$('#slideRight').on('click', function(){
    $('.carousel').carousel('next');
});