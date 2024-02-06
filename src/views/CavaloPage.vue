<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>Choose your Horse 🎠</ion-title>
          <ion-buttons slot="start">
            <ion-back-button default-href="home"></ion-back-button>
          </ion-buttons>          
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">

        <ion-list>
          <ion-item-sliding>
            <ion-item 
              v-for="item in this.cavalos"
              class="ion-activatable ripple-parent"
              @click="selecionar(item.ID)"
            >
              <ion-avatar item-start>
                <ion-img :src="'/public/cavalo'+item.ID +'.jpg'" />
              </ion-avatar>
              <ion-label  class="ripple-parent">
                {{ item.nome }}
                <span style="font-size: 50%">({{item.ID}})</span>              
              </ion-label>
              <ion-ripple-effect></ion-ripple-effect>         
            </ion-item>
          </ion-item-sliding>
        </ion-list>    
    
      </ion-content>
    </ion-page>
   


  </template>
  
  <script lang="ts">
    import { IonButton, IonContent, IonPage, IonBackButton } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import HJSON from '../../public/horses.json';
  
    export default defineComponent({
      name: 'CavaloPage',
      components: {
        IonButton,
        IonContent,
        IonPage,
        IonBackButton,
      },
      methods:{
 
        selecionar(valor: number)
        {
          window.location.href = '/SorteioPage?valor='+valor;
        },

      },

      data()
      {
        return {
          cavalos: HJSON
        }

      },

      setup() {
        return {  };
      },
    });
  </script>


<style scoped>
  .ripple-parent {
    position: relative;
    overflow: hidden;
  }
</style>