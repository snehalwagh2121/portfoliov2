// const aboutDiv=document.querySelector('.aboutDiv');

$(document).ready(function(){ // was throwing $ is undefined error.. to resolve this used the jquery library
    // console.log('hello');
    // alert('hello')
    $('.aboutDiv').waypoint(function(direction){
        $('.aboutDiv').addClass('animated animate__fadeInLeft');
    },{
        offset: '400px'
    });
    $('.skillsDiv').waypoint(function(direction){
        $('.skillsDiv').addClass('animated animate__fadeInRight');
    },{
        offset: '400px'
    })

    $('.projectsDiv').waypoint(function(){
        $('.project').addClass('projLoc');
    },{
        offset: '400px'
    })
    $('.contactPage').waypoint(function(){
        $('.linkedIn').addClass('linkedInAnime');
        $('.github').addClass('githubAnime');
        $('.twitter').addClass('twitterAnime');
    },{
        offset: '800px'
    })
})