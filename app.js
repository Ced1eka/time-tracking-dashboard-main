const tabs = [...document.querySelectorAll('[role=tab]')];
const panels = [...document.querySelectorAll('[role=tabpanel]')];
console.log(panels);


function tabClick(e){
      const panToCtrl = e.currentTarget.getAttribute('aria-controls');
      console.log(panToCtrl);
      panels.forEach(p =>{
       p.setAttribute('aria-hidden', `${p.id === panToCtrl ? 'false' : 'true'}`, )

      })
}


tabs.forEach(tab =>{
      tab.addEventListener('click',tabClick)
})