/* 즉시 호출 함수 */

(() =>{
    const sceneInfo = [
        {
            //0
            type:'sticky',
            heightNum: 5, //브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,
            objs:{
                container: document.querySelector("#scroll-section-0")
            }
            
        },

        {
            //1
            type:'normal',
            heightNum: 5, //브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,
            objs:{
                container: document.querySelector("#scroll-section-1")
            }
            
        },

        {
            //2
            type:'sticky',
            heightNum: 5, //브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,
            objs:{
                container: document.querySelector("#scroll-section-2")
            }
            
        },

        {
            //3
            type:'sticky',
            heightNum: 5, //브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,
            objs:{
                container: document.querySelector("#scroll-section-3")
            }
            
        }
    ];

    function setLayout(){
        // 각 스크롤 섹션의 높이 셋팅
        for(let i = 0; i < sceneInfo.length; i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`

        }

        console.log(sceneInfo);
    }

    let yOffset = 0
    function scrollLoop(){
        
    }

    window.addEventListener('resize', setLayout)
    window.addEventListener('scroll',()=>{
        yOffset = window.scrollY
        scrollLoop();

    })


    setLayout()
}) ();


/* = 같은 형태 */
// (function (){}) ();