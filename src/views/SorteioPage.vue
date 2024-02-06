<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>🐎Race Result💎</ion-title>
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
  import { IonButton, IonContent, IonPage, IonBackButton, } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import HJSON from '../../public/horses.json';

  export default defineComponent({
    name: 'SorteioPage',
    components: {
      IonButton,
      IonContent,
      IonPage,
      IonBackButton,
    },
    methods:{

      alertar()
      {


        alert( Math.floor(Math.random() * 6) );

      }

    },

    data()
      {
        return {
          cavalos: HJSON
        }

      },

    created() {
      let urlParams = new URLSearchParams(window.location.search);

      if (urlParams.has('valor')) {
        const v = urlParams.get('valor');

      // ORDENA O ARRAY DE MODO ALEATORIO
      this.cavalos.sort( () => Math.random() - 0.5 );

      // CHECA SE EH O PRIMEIRO DO ARRAY
      if (this.cavalos[0].ID == parseInt(v || '0') )
      {
        alert('YOU WIN 🏆');
      }
      else
      {
        alert('YOU LOSE ❌');
      }

      }

      return false;
    },

    setup() {
      return {  };
    },

  });
</script>