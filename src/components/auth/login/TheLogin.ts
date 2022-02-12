import { defineComponent } from "vue";
export default defineComponent ({
    data() {
        return {
            email: "",
            password: ""
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
          }
    },
});