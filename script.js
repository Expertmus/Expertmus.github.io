document.addEventListener("DOMContentLoaded", () => {
    const scrollItems = document.querySelectorAll('.scroll-item'),
        btn = document.querySelectorAll('.btn'),
        modal = document.querySelector('.modal'),
        closeMod = document.querySelector('.modal__close'),
        modalPhone = document.querySelector('.modal__phone'),
        hamburger = document.querySelectorAll('.hamburger-lines'),
        hamburgerLineOne = document.querySelectorAll('.line1'),
        hamburgerLineTwo = document.querySelectorAll('.line2'),
        hamburgerLineThree = document.querySelectorAll('.line3'),
        headerNav = document.querySelector('.nav__menu'),
        vk = document.querySelector('#vk'),
        telegram = document.querySelector('#telegram'),
        whatsapp = document.querySelector('#whatsapp');
        
    
    function scrollAnimation() {
        let windowCenter = ((window.innerHeight / 1.25) + window.scrollY) 
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 2)
            if(windowCenter >= scrollOffset){
                el.classList.add('animation-class')
            } 
            else{
                el.classList.remove('animation-class')
            }
        })
    }
    scrollAnimation()
    window.addEventListener('scroll', () => {
        scrollAnimation()
    })

    

    
    btn.forEach(item => {
        item.addEventListener('click', (e) => {
            if(e.target === item && item.classList.contains('btn')){
                modal.classList.toggle('show')  
            }         
        })
    })

    modal.addEventListener('click', (e) => {
        if (e.target === closeMod || e.target === modal){
            modal.classList.toggle('show')
        }
    })
    

    function hamburgerOpen() {
        hamburger.forEach(item => {
            item.addEventListener('click', () => {
                hamburgerLineOne.forEach(item => {
                    item.classList.toggle('line1-active')
                })
                hamburgerLineTwo.forEach(item => {
                    item.classList.toggle('line2-active')
                })
                hamburgerLineThree.forEach(item => {
                    item.classList.toggle('line3-active')
                })
                headerNav.classList.toggle('show-humburger')
            })
        })
    }
    hamburgerOpen()
    

    const botTocen = '5499326623:AAGD-SsWHM6laSh-4308Uq6nSKQUAGLMyVU',
        chatId = '-1001713056748',
        urlIp = `https://api.telegram.org/bot${botTocen}/sendMessage`
    
    

    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        let message = `<b>Заявка с сайта:</b>
<b>${this.name.value}</b>
<b>${this.phone.value}</b>
` 
        axios.post(urlIp, {
            chat_id: chatId,
            parse_mode: 'html',
            text: message
        })
        
        .then((res) => {

            modal.innerHTML = `
            
                <div class="modal__dialog">
                
                    <div class="modal__content">
                        <div class="modal__title">Спасибо за оставленную заявку, я свяжусь с вами</div>
                    </div>
                </div>  
            
            `   
            setInterval(() => {
                modal.classList.remove('show')
            }, 5000);
        })
        
    })
    

    const digitsMask = IMask(modalPhone, {
        mask: `+7 000 000-00-00`
    });


    function openVk(){
        vk.addEventListener('click', () => {
            document.location.assign("https://vk.com/kirill_aligator")
        })
    }

    openVk()

    function openTg(){
        telegram.addEventListener('click', () => {
            document.location.assign("https://t.me/typa_Kirill")
        })
    }

    openTg()

    function openWhatsapp(){
        whatsapp.addEventListener('click', () => {
            document.location.assign("https://api.whatsapp.com/send?phone=79874522712")
        })
    }

    openWhatsapp()
    
})

