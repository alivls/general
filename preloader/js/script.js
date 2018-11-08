function preloader() {
    $(() =>{

        setTimeout(() =>{

            let p = $('.preloader');
            p.css('opacity', 0);
            setTimeout(
                ()=> p.remove(),
                parseInt(p.css('1s'))* 1000
                
            );

            }, 1000);

    });
}
preloader();