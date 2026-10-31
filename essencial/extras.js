
// Recursos adicionais de demonstração (sem servidor e sem agendamento confirmado)
function demoNotice(){alert('Demonstração fictícia: em um site contratado, esta solicitação será enviada ao WhatsApp configurado pelo estabelecimento. Nenhuma reserva é confirmada automaticamente.');}
function initExtras(){
 document.querySelectorAll('[data-demo-action]').forEach(el=>el.addEventListener('click',demoNotice));
 document.querySelectorAll('[data-gallery-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-gallery-filter]').forEach(x=>x.classList.toggle('active',x===b));document.querySelectorAll('[data-category]').forEach(x=>x.hidden=b.dataset.galleryFilter!=='todos'&&x.dataset.category!==b.dataset.galleryFilter)}));
 document.querySelectorAll('[data-lightbox-image]').forEach(el=>el.addEventListener('click',()=>{const overlay=document.createElement('div');overlay.className='lightbox';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-label','Imagem ampliada');const img=document.createElement('img');img.src=el.dataset.lightboxImage;img.alt=el.querySelector('img')?.alt||'Foto da galeria';const close=document.createElement('button');close.textContent='×';close.setAttribute('aria-label','Fechar imagem');overlay.append(img,close);document.body.append(overlay);const dismiss=()=>{overlay.remove();document.removeEventListener('keydown',esc)};const esc=e=>{if(e.key==='Escape')dismiss()};close.onclick=dismiss;overlay.onclick=e=>{if(e.target===overlay)dismiss()};document.addEventListener('keydown',esc);close.focus()}));
 const form=document.querySelector('#advanced-form');if(form)form.addEventListener('submit',e=>{e.preventDefault();demoNotice()});
}
initExtras();
