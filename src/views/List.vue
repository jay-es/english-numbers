<template>
  <section class="section list-view">
    <div class="container">
      <table class="table is-fullwidth">
        <thead>
          <th>Number</th>
          <th>English</th>
          <th>Pro&shy;nun&shy;ci&shy;a&shy;tion</th>
        </thead>
        <tbody>
          <tr
            v-for="(n, i) of numbers"
            :key="i"
          >
            <td>{{ n.num }}</td>
            <td>{{ n.txt }}</td>
            <td>
              <audio-button
                :file-name="n.file"
                class="is-small"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AudioButton from '@/components/AudioButton.vue'
import { numbers, NumberInfo } from '@/common/numbers'

@Component({
  components: {
    AudioButton,
  },
})
export default class List extends Vue {
  private numbers: NumberInfo[] = numbers
}
</script>

<style lang="scss" scoped>
table {
  margin: 0 auto;
  max-width: 480px;
}
</style>
