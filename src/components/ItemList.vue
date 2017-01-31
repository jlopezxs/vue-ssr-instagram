<template>
  <div>
    <div class="grid">
      <item class="grid__item" v-for="item in items" :key="item.id" :item="item">
      </item>
    </div>
    <button class="button" v-on:click="loadMore">load more</button>
  </div>
</template>

<script>
import Item from './Item.vue'
import axios from 'axios'

const token = '362555203.4f46a97.4f3cda97a50b49c89bc950c7f2d36766'
const userName = 'kevin.ongko'

export default {
  name: 'item-list',
  components: {
    Item
  },
  methods: {
    loadMore () {
      this.count = this.count + 10
      this.getUserItems()
    },
    normalizeResponse (items) {
      return items.map((item, index) => {
        return {
          id: index,
          imageSrc: item.images.standard_resolution.url || '',
          username: 'test',
          avatar: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/15875865_226899517768400_4928691378382176256_a.jpg'
        }
      })
    },
    getUserItems () {
      axios.get(`https://api.instagram.com/v1/users/${this.profile[0].id}/media/recent?access_token=${token}&count=${this.count}`)
        .then(response => {
          this.items = this.items.concat(this.normalizeResponse(response.data.data))
          console.log(response.data.data[0].images.standard_resolution)
          return response.data
        })
        .catch(error => {
          this.error = error
          return error
        })
    }
  },
  mounted () {
    return axios.get(`https://api.instagram.com/v1/users/search?access_token=${token}&q=${userName}`).then(response => {
      this.profile = response.data.data
      return this.getUserItems()
    }).catch(error => {
      this.error = error
      return error
    })
  },
  data () {
    const data = {
      count: 10,
      error: '',
      profile: '',
      loading: false,
      items: []
    }
    return data
  }
}
</script>

<style lang="sass" scoped>
  .grid {
    padding-top: 123px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    &__item {
      flex-grow: 0;
      flex-shrink: 0;
      width: calc(1/3*100% - (2*10px));
      margin: 10px;
      box-shadow: 0px 6px 9px rgba(0,0,0,0.1);
      align-items: center;
      justify-content: center;
    }
  }
</style>
