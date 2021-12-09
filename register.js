//useless..

customElements.define(
    'form',
    class extends HTMLElement {
      constructor() {
        super();
        const template = document.getElementById('box');
        const templateContent = template.content;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(templateContent.cloneNode(true));
      }
  
      connectedCallback() {
        const form = this.shadowRoot.querySelector('form');
        form.addEventListener('submit', this.onSubmit.bind(this), false);
      }
  
      onSubmit(e) {
        e.preventDefault();
        const user = this.shadowRoot.querySelector('#username').value;      
        const email = this.shadowRoot.querySelector('#email').value;
        const password = this.shadowRoot.querySelector('#psw').value;
        const confirmPassword = this.shadowRoot.querySelector('#psw-repeat').value;
  
        if (password !== confirmPassword) {
          alert("password's don't match!");
        } else if (password.length < 6) {
          alert('Please make your password at least 6 characters');
        }
  
        this.signup(email, password, user)
          .then(() => {
            alert('Success signing up! Please verify your email, then login');
            window.location.href = 'signin.html';
          })
          .catch(e => {
            alert(e.message);
          });
      }
  
      signup(email, password, user) {
        return Parse.Cloud.run('user:register', {
          email,
          password,
          user
        });
      }
    }
  );