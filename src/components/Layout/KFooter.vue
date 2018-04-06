<template>
  <div class="footer bg-neutral font-primary">
    <div
      style="margin-top: 5em"
      class="footer-max-width row generic-padding"
    >
      <div
        class="generic-padding col-md-4"
        style="margin-top: -5em; text-align: center;"
      >
        <img
          class="shadow"
          src="~@/assets/bike-karrot-logo.jpg"
        >
      </div>
      <div class="column col-md-4">
        <div>
          <a href="https://github.com/brnsolikyl/karrot-to-bike-kitchen/">
            <i class="fa fa-fw fa-github on-left" />
            {{ $t('GLOBAL.GITHUB_NOTE') }}
          </a>
        </div>
        <div>
          <a href="https://">
            <i class="fa fa-fw fa-globe on-left" />
            {{ $t('GLOBAL.FSWW_NOTE') }}
          </a>
        </div>
        <div>
          <a href="mail:">
            <i class="fa fa-fw fa-envelope on-left"/>
            mail@cykelkok
          </a>
        </div>
      </div>
      <div class="column col-md-4">
        <hr
          style="width: 3em"
          class="lt-md"
        >
        <div>
        Tool based on 
          <a href="https://foodsaving.world/en/karrot">
        Karrot
          </a>
        for foodsaving
        </div>
        <div>
          mantained with
            <i class="fa fa-heart" />
            by
            <a href="https://hackonomylab.org">
              Hackonomy lab
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { QBtn, QIcon, QList, QItem } from 'quasar'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    QBtn, QIcon, QList, QItem,
  },
  computed: {
    ...mapGetters({
      about: 'about/get',
    }),
    release () {
      if (process.env.NODE_ENV === 'development') {
        return {
          link: '',
          name: 'local dev version',
        }
      }
      if (this.about) {
        if (this.about.env === 'production') {
          return {
            link: 'https://github.com/yunity/karrot-frontend/blob/master/CHANGELOG.md',
            name: 'Release 4',
          }
        }
        if (this.about.env === 'development') {
          const sha = this.about.commitSHA
          return {
            link: `https://github.com/yunity/karrot-frontend/tree/${sha}`,
            name: 'beta version',
          }
        }
      }
      else {
        return {
          link: '',
          name: '',
        }
      }
    },
  },
  methods: {
    ...mapActions({
      fetchAbout: 'about/fetch',
    }),
  },
  mounted () {
    this.fetchAbout()
  },
}
</script>

<style scoped lang="stylus">
@import '~variables'
  .footer
    width: 100%
    margin: 0 auto
    min-height 10em
    img
      height 10em
      margin 0 1em 0em 0
    .column div
      margin .5em
    .footer-max-width
      max-width 60em
      margin: 0 auto
    .shadow
      filter: drop-shadow(0px 1px 1px rgba(0,0,0,.7) )
    @media (max-width: $breakpoint-sm)
      text-align center

</style>
