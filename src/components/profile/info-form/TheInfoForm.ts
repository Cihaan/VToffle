import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isActive: false,
      isDisabled: true,
      name: "",
      email: "",
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
      if (this.name.length !== 0 && this.email.length !== 0) {
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
  },
});