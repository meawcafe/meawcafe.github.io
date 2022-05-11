function OSwindowConfig() {

    this.configHome = 0

    this.changeWallpaper = function(data) {
        const imgConfig = {
            1: 'left bottom', 
            2: 'center center',
            3: 'center center',
            4: 'center bottom',
            5: 'center center',
            6: 'center bottom',
            7: 'left 76%',
            8: 'left bottom',
            9: 'left center',
            10: '40% 40%',
            11: 'right bottom',
            12: 'right bottom',
            13: 'right bottom',
            14: 'right bottom',
            15: 'right bottom',
            16: 'left bottom',
        }

        // background: url('../assets/bg/1.jpeg') no-repeat left bottom;
        // ./assets/bg/${pic + 1}.jpeg

        $('.os-grid').css('background-image', `url("./assets/bg/${data.img}.jpeg")`)
        $('.os-grid').css('background-position', imgConfig[data.img])

        $('.container-desktop').css('opacity', '0')
        setTimeout(()=>{
            $('.container-desktop').css('background-image', `url("./assets/bg/${data.img}.jpeg")`)
            $('.container-desktop').css('background-position', imgConfig[data.img])

            setTimeout(()=>{
                $('.container-desktop').css('opacity', '1')
            }, 500)
        }, 800)
    }

    this.changePerformance = function() {
        // 
    }

    this.changeTheme = function(x) {
        if (x) {
            // main color
            main_dark_color = [ '#131313', '#161616', '#1d1d1d', '#232323', '#272727', '#303030', '#3f3f3f', '#c2c2c2', '#eeeeee' ]
            
            main_dark_color.map(function(color, index){
                document.documentElement.style.setProperty(`--main-color${index}`, color);
            });


            // interface
            dark_interface_color = ['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0.2)', 'rgba(0, 0, 0, 0.6)', 'rgba(19, 19, 19, 0.4)', '255, 255, 255', 'rgb(28, 28, 28)', 'rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.4)', 'rgb(209, 209, 209)', 'rgba(194, 194, 194, 0.6)']

            dark_interface_color.map(function(color, index){
                document.documentElement.style.setProperty(`--interface-color${index}`, color);
            });
            
            // text
            document.documentElement.style.setProperty('--color-name', 'rgb(190, 190, 190)');
            document.documentElement.style.setProperty('--color-status', 'rgb(160, 160, 160)');
            document.documentElement.style.setProperty('--color-sub-status', 'rgb(130, 130, 130)');

            // svg
            $('svg').find('path').css('fill', 'white');
        } else {
            $('.container-desktop').css('background-image', `url("./assets/bg/protection.jpg")`)
            $('.container-desktop').css('background-position', 'center center')

            // main color
            main_white_color = [ '#e6e6e6', '#ededed', '#e2e2e2', '#dcdcdc', '#ededed', '#cfcfcf', '#c0c0c0', '#3d3d3d', '#111111' ]
            

            main_white_color.map(function(color, index){
                document.documentElement.style.setProperty(`--main-color${index}`, color);
            });

            // interface
            dark_interface_color = ['rgba(167, 167, 167, 0.4)', 'rgba(255, 255, 255, 0.2)', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.4)', 'rgba(255, 255, 255, 0.4)', '0, 0, 0', 'rgb(247, 247, 247)', 'rgba(0, 0, 0, 0.4)', 'rgba(255, 255, 255, 0.2)', 'rgb(0, 0, 0)', 'rgb(221, 221, 221)']

            dark_interface_color.map(function(color, index){
                document.documentElement.style.setProperty(`--interface-color${index}`, color);
            });

            // text
            document.documentElement.style.setProperty('--color-name', 'rgb(65, 65, 65)');
            document.documentElement.style.setProperty('--color-status', 'rgb(95, 95, 95)');
            document.documentElement.style.setProperty('--color-sub-status', 'rgb(125, 125, 125)');

            // svg
            $('svg').find('path').css('fill', 'black');
        }
    }
    
    this.openConfig = function(data) {
        setTimeout(()=>{
            $(`#${data.hide}`).css('animation', '')
            $(`#${data.show}`).css('animation', '')
            void $(`#${data.hide}`).outerHeight()
            void $(`#${data.show}`).outerHeight()
            $(`#${data.hide}`).css('animation', 'hideConfig 800ms forwards')
            $(`#${data.show}`).css('animation', 'showConfig 800ms forwards')
        }, 50)
    }
    
    $(".context-menu-window").click(function() {
        NOTOwb.openWindow($(this).data("window-name"), { a: 'os-config', b: 'os-config-appearance' })
    })

    $('.config-choice-item').click(function() {
        if ($(this).data("config-name")) {
            // $('#config-choice-title').css('opacity', '1')
            $('.os-config-menu svg').css('width', '1rem')
            $('.os-config-menu svg').css('margin-right', '0.4rem')
            NOTOConfig.openConfig({ hide: 'os-config-choice', show: $(this).data("config-name") })
        }
    })

    $(".os-config-menu").click(function() {
        
        // NOTOwb.openWindow($(this).data("window-name"))

        // $('#config-choice-title').css('opacity', '0')
        if ($('#os-config-choice').css('z-index') == 1) {
            NOTOConfig.openConfig({ hide: $(this).data("config-name"), show: 'os-config-choice'})
            $('.os-config-menu svg').css('width', '0')
            $('.os-config-menu svg').css('margin-right', '0')
        }
    })

    // $('.appearance-choice-item').click(function() {
    //     elems = $(this).data("appearance-choice").split(';')

    //     $(this).css('background-color', 'var(--main-color1)')
    //     $('.appearance-choice-item').not(this).css('background-color', 'var(--interface-color6)')

    //     $(`#${elems[0]}`).css('display', 'grid')
    //     $(`#${elems[1]}`).css('display', 'none')
    // })

}

var NOTOConfig = new OSwindowConfig()