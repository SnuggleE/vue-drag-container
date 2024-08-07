<template>
  <div class="drag-page">
    <drag-container>
      <template #left>
        <div class="nav-tree">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima odit nisi laborum ab tempore voluptatum, temporibus error amet praesentium sint rerum? Est voluptatem quisquam illo. Accusantium perferendis earum omnis beatae!
          Incidunt ut eveniet ea dolorum? Soluta ex eius delectus facilis illum iusto aperiam quas quibusdam debitis dolor cupiditate ducimus possimus error doloremque veritatis, dolore totam dignissimos nulla assumenda eligendi impedit?
          Illum, saepe recusandae. Enim, reprehenderit explicabo iure libero laboriosam eveniet consequuntur voluptates fugiat vero distinctio inventore nobis repellat adipisci repellendus recusandae maxime iusto qui provident aperiam? Sit minus quisquam voluptatem.
          Incidunt voluptatem fugiat error? Molestias quas culpa at! Velit, obcaecati repudiandae vitae corporis quia inventore aliquid incidunt, maxime, accusamus voluptate quos? Optio, ut eius.
        </div>
      </template>
      <template #right>
        <div class="content-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias similique corrupti consectetur vero ratione, velit tempora totam voluptatum, magni repudiandae vel et hic facere minus labore ad, dolorem a iusto.
          Quos quo totam voluptatem ullam molestias, nulla, ex modi soluta veniam quidem dolores quisquam id! Maiores tempora ipsum reiciendis quaerat molestiae perferendis quos deleniti dolore cum vero. Architecto, porro deserunt.
          Veritatis magnam perferendis optio eaque quibusdam. Doloremque quibusdam deleniti vel sapiente ea amet accusamus, ullam aspernatur ab, officia quaerat dolores minus? Architecto animi ipsa modi ipsam debitis, ratione facilis dolores.
          Quaerat quibusdam facilis repudiandae et laudantium labore doloribus, aliquid suscipit tempora ad eum, cumque quidem. Veritatis enim eligendi, natus adipisci, minima, dicta debitis reiciendis corporis quae commodi fugiat quam praesentium?
          Odio quae odit quo velit dolor. Impedit obcaecati harum nobis, consequatur exercitationem labore corporis facilis unde nihil ullam maiores? Libero corporis blanditiis ad repudiandae sunt? Obcaecati voluptate rem nemo velit.
        </div>
      </template>
    </drag-container>
  </div>
</template>

<script setup>
import dragContainer from './components/drag-container.vue';

</script>
<style lang="less" scoped>
.drag-page {
  width: 100%;
  height: 100vh;
}
.nav-tree {
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow: auto;
}
.content-wrap {
  width: 100%;
  height: 100%;
  padding: 20px;
}
</style>