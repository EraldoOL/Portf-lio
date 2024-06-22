const myObserver = new IntersectionObserver((entries) => {
  
  entries.forEach((entry) => {
    if(entry.isIntersecting){
    entry.target.classList.add('show')
  } else {
    
    
    /*entry.target.classList.remove('show')*/
  }
    
  })
})

const elements = document.querySelectorAll('.ani')

elements.forEach((element) => myObserver.observe(element));





document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:eo80797@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0D%0A%0D%0ADe:%20${encodeURIComponent(email)}`;

    window.location.href = mailtoLink;
});