import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
          isActive: false,
          isDisabled: true,
          password: "",
          cpassword: "",
        };
      },
      methods: {
        goBack: function (): void {
          this.$router.back();
        },
        toggleActive(bb: boolean): void {
          this.isActive = bb;
        },
        onKey(): void {
          //si le formulaire est complété
          if (this.password.length !== 0 && this.cpassword.length !== 0) {
            //on regarde si le bouton n'est pas déjà actif
            this.isDisabled = false;
            this.toggleActive(true);
          } else {
            //si le formulaire n'est pas rempli
            //si le bouton n'est pas déjà désactivé
            this.toggleActive(false);
            this.isDisabled = true;
          }
        },
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
      },
})