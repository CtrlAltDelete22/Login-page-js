const logbtn = document.querySelector('.btn');
const win = document.querySelector('.signupWindow');
const overlay = document.querySelector('.overlay');

logbtn.addEventListener('click', function()
{
    win.classList.remove('hidden');
    overlay.classList.remove('hidden');
});
document.addEventListener('keydown' , function(e)
{
    if(e.key === 'Escape' && !win.classList.contains('.hidden'))
    {
        win.classList.add('hidden');
        overlay.classList.add('hidden');
    }
})
