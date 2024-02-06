<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>𝘋𝘪𝘢𝘮𝘰𝘯𝘥 𝘏𝘰𝘳𝘴𝘦 🐎💎</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">


      <div style="margin: 15px">
        <img src="/public/cavalopicoto.jpg" width="100%"/>
      </div>

      <ion-button color="dark" expand="block" @click="alertar">START 🐴</ion-button>

     

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'HomePage',
    components: {
      IonButton,
      IonContent,
      IonPage,
    },
    methods:{

      alertar()
      {
 
         window.location.href = '/CavaloPage'
 

        
      }

    },
    setup() {
      return {  };
    },
  });
</script>