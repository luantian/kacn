<template>
  <el-dialog v-bind="$attrs" v-on="$listeners">
    <template v-for="(index, name) in $slots" :slot="name">
      <slot :name="name" />
    </template>
  </el-dialog>
</template>
