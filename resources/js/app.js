const panelSHow = document.getElementById('panel_show');
const chevron = document.getElementById('chevron');
// const overlay = document.getElementById('overlay_');

panelSHow.addEventListener('click', function(){
    const panel = document.getElementById('panel');
    panel.classList.toggle('block_panel');
    chevron.classList.toggle('chevron_panel');
    
    
})