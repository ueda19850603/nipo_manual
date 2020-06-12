<template>
  <aside class="sidebar">
    <ToggleDarkMode/>

    <NavLinks />

    <br>
    <slot name="top" />

    <SidebarLinks
      :depth="0"
      :items="items"
    />
    <slot name="bottom" />
    <ExeButton label="Nipoを起動(Web版)" url="https://nipoapp.sndbox.jp/" />

    <div style="margin-bottom:10px;">モバイルアプリは初期設定が済んでから▼</div>
    <div class="mybanner">
      <div class="myleft">
        <a href="https://play.google.com/store/apps/details?id=jp.sndbox.nipoapp" target="_blank"><img src="/b1.png" style="width:100%;" /></a>
      </div>
      <div class="myright">
        <a href="https://itunes.apple.com/us/app/nipo/id1385965600?l=ja&ls=1&mt=8" target="_blank"><img src="/b2.png" style="width:100%;" /></a>
      </div>
    </div>
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import ExeButton from '../../components/ExeButton.vue'
import ToggleDarkMode from '../../components/ToggleDarkMode.vue'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks, ExeButton, ToggleDarkMode },

  props: ['items']
}
</script>

<style lang="stylus">
.mybanner
  display: flex;
  .myleft
    position: relative;
    width: calc(50% - 5px);
  .myright
    color: #fff;
    font-size: 16px;
    width: 50%;
.sidebar
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
      font-weight bold
    & > li:not(:first-child)
      margin-top .75rem

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>
