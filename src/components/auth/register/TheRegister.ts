import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent ({
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        showPassword(event: Event): void {
            let element = event.target as HTMLElement
            
            if (element.getAttribute("alt") === "show password") {
              element.setAttribute("src", "/src/assets/logos/eye_closed.svg");
              element.setAttribute("alt", "hide password");
              element.previousElementSibling?.setAttribute("type", "text");
            }
            else {
              element.setAttribute("src", "/src/assets/logos/eye_open.svg");
              element.setAttribute("alt", "show password");
              element.previousElementSibling?.setAttribute("type", "password");
            }
          },
          handleSubmit(): void {
            if (this.name.length !==0 && this.email.length !== 0 && this.password.length !== 0) {
              const data = {
                name: this.name,
                email: this.email,
                password: this.password
              }
              axios.post('/register', data)
              .then((res) => {
                if (res) {
                  this.$router.push('login')
                }
              })
              .catch((err) => {
                console.log(err);
              })
            }
          }
    },
});