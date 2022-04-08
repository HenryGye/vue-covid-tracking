<template>
  <div v-if="currentStateInfo" class="mt-2">
    <b-table-simple hover small caption-top stacked>
      <caption>
        The most recent COVID data for a single state. The current value may be different than today.
      </caption>
      <b-tbody>
        <b-tr>
          <b-th rowspan="3" class="text-center">{{currentStateInfo.name}}</b-th>
          <b-th stacked-heading="Date" class="text-left">{{currentValueState.date.toString().replace(/(\d{4})(\d{2})(\d{2})/g, '$3/$2/$1')}}</b-th>
          <b-td stacked-heading="Positive cases">{{currentValueState.positive}}</b-td>
          <b-td stacked-heading="Total test result">{{currentValueState.totalTestResults}}</b-td>
          <b-td stacked-heading="Death">{{currentValueState.death}}</b-td>
          <b-td stacked-heading="Recovered">{{currentValueState.recovered}}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentValueState", "currentStateInfo"])
  }
};
</script>
