<template>
  <div>
    <div class="title">{{ $route.meta.title }}</div>
    <div class="disclaimer">
      Уважаемые коллеги, вы можете выбрать только <strong>одну</strong> экскурсию из представленных. <br>
      Запись на экскурсии закончится <strong>13.08. 2022</strong>, в <strong>18.00</strong>.
    </div>
    <div class="products">
      <div v-for="(product, index) in products" :key="index" class="product">
        <img :src="product.image" height="216" class="product__img">
        <p class="product__title">{{ product.title }}</p>
        <p v-html="product.desc" class="product__description"></p>
        <div class="divider"></div>
        <div class="product__info">
          <!-- <div class="timing">
            <div class="timing__text">Выезд из отеля</div>
            <div class="timing__value">{{ product.info.departure }}</div>
          </div>
          <div class="timing">
            <div class="timing__text">Время в дороге</div>
            <div class="timing__value">{{ product.info.time }}</div>
          </div> -->
          <div class="timing">
            <div class="timing__text">Начало программы</div>
            <div class="timing__value">{{ product.time }}</div>
          </div>
          <!-- <div class="timing">
            <div class="timing__text">Завершение программы</div>
            <div class="timing__value">{{ product.info.end }}</div>
          </div>
          <div class="timing">
            <div class="timing__text">Прибытие в отель</div>
            <div class="timing__value">{{ product.info.arrival }}</div>
          </div> -->
          <button class="registration" @click="selectEvent(product.title)">
            {{
              product.count_of_clients > 0 && product.status == 'new'  ? 'Записаться' : 
              product.count_of_clients > 0 && product.status == 'done' ? 'Вы учавствуете'  :
              'Свободных мест нет'
            }}
          </button>
        </div>       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeambuildingView',
  data() {
    return {
      products: []
    }
  },
  computed: {
    email() {
      return document.cookie.split(';')[1].split('=')[1]
    }
  },
  created() {
    // const fio = document.cookie.split(';')[0].split('=')[1]
    
    fetch(`https://bionorica-growingrelations25.ru/bio/index?action=get_list_of_events&email=${this.email}`)
      .then((response) => response.json())
      .then((data) => this.products = data)
  },
  methods: {
    selectEvent(title) {
      fetch(`https://bionorica-growingrelations25.ru/bio/index?action=select_event&email=${this.email}&title=${title}`)
      .then((response) => response.json())
      .then((data) => this.products = data)
    }
  }
}
</script>

<style>
.disclaimer {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 42px rgba(215, 217, 221, 0.49);
  border-radius: 6px;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
.product {
  margin-bottom: 12px;
  padding: 20px;
  background-color: #f4f8fd;
  border-radius: 6px;
}
.product__img {
  width: 100%;
  height: 100%;
}
.product__title {
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  color: #191b20;
}
.product__description {
  font-size: 13px;
  font-weight: 400;
  line-height: 19.5px;
  text-align: left;
  color: #191b20;
  opacity: 0.5;
}
.divider {
  margin-top: 18px;
  margin-bottom: 24px;
  width: 100%;
  height: 2px;
  background-color: #191b20;
  opacity: 0.1;
}
.product__info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.timing {
  width: calc(100% - 20px) / 6;
}
.timing__text {
  margin-bottom: 2px;
  font-size: 11px;
  font-weight: 500;
  color: #191b20;
  opacity: 0.5;
}
.timing__value {
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  color: #191B20;
}
.registration {
  width: 142px;
  height: 46px;
  border: none;
  border-radius: 6px;
  background-color: #51a3ef;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  color: #fff;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .container {
    margin-left: 0;
  }
  .registration {
    width: 100%;
    margin-top: 20px;
  } 
}
@media screen and (max-width: 572px) {
  .product__info {
    justify-content: start;
  }
  .timing {
    width: calc(100% - 20px) / 4;
    margin-right: 20px;
  }
}
</style>