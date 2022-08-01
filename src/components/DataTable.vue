<template>
  <div>
    <div v-for="(item, index) in items" :key="index" class="data-table">
      <div class="data-table__header">{{ item.title }}</div>
      <table>
        <thead>
          <tr v-for="(header, index) in headers" :key="index">
            <th>{{ header.start }}</th>
            <th>{{ header.end }}</th>
            <th>{{ header.event }}</th>
            <th>{{ header.speaker }}</th>
            <th>{{ header.location }}</th>
            <th>{{ header.dressCode }}</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="row in item.rows">
            <tr v-for="(sub, key) in row.subs" :key="key" :class="{'marked': sub.isMarked, 'marked-text': sub.isMarkedText}">
              <td>{{ sub.start }}</td>
              <td>{{ sub.end }}</td>
              <td>{{ sub.event }}</td>
              <td>{{ sub.speaker }}</td>
              <td v-if="sub.location">{{ sub.location }}</td>
              <td v-if="sub.dress">{{ sub.dress }}</td>
              <td v-if="!sub.location && key == 0" :rowspan="row.subs.length">{{ row.location }}</td>
              <td v-if="!sub.dress && key == 0" :rowspan="row.subs.length">{{ row.dress }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    title: String,
    items: Array
  },
  data() {
    return {
      headers: [
        {
          start: this.$t('timetable.start'),
          end: this.$t('timetable.end'),
          event: this.$t('timetable.event'),
          speaker: this.$t('timetable.speaker'),
          location: this.$t('timetable.location'),
          dressCode: this.$t('timetable.dressCode'),
        }
      ],
    }
  }
}
</script>

<style>
table, th, td {
  border: 1px solid rgba(25, 27, 32, 0.1);
  border-collapse: collapse;
  box-sizing: border-box;
  text-align: left;
  padding: 12px;
  font-size: 11px;
}
th {
  font-weight: 700;
}
th:nth-child(3) {
  min-width: 245px;
}
th:nth-child(4) {
  min-width: 190px;
}
th:nth-child(5) {
  min-width: 140px;
}
th:nth-child(6) {
  min-width: 125px;
}
table {
  min-width: 858px;
  margin-bottom: 16px;
  border-radius: 0 0 6px 6px;
}
.data-table__header {
  width: 858px;
  padding: 14px;
  padding-right: 0;
  background-color: #f4f8fd;
  border: 1px solid rgba(25, 27, 32, 0.1);
  border-bottom: none;
  border-radius: 6px 6px 0 0;
  box-sizing: border-box;
  text-align: left;
  font-size: 14px;
  font-weight: 700;
  color: #51a3ef;
}
.marked {
  background-color: rgba(25, 27, 32, 0.03);
  color: rgba(25, 27, 32, 0.5)
}
.marked-text {
  color: rgba(25, 27, 32, 0.5)
}
</style>
