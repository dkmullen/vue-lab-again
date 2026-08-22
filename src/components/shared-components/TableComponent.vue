<script setup>

import { ref, computed } from 'vue'

const pageCount = computed(() => Math.ceil(props.items.length / 10))
const pageSize = ref(10)

const props = defineProps({
  headers: { type: Array },
  items: { type: Array },
  title: { type: String, default: 'Table' },
  addButtonText: { type: String, default: 'Add' },
  id: { type: String, default: 'shared-table' },
  actions: { type: Array, default: () => [] },
})

const emit = defineEmits(['doAction'])

function doAction(action, id) {
  emit('doAction', { action, id })
}

function getIcon(action) {
  switch (action) {
    case 'view':
      return 'mdi-eye'
    case 'edit':
      return 'mdi-pencil'
    case 'delete':
      return 'mdi-delete'
    default:
      return ''
  }
}

</script>

 <template>
  <v-sheet border rounded>
    <v-data-table
      :headers="headers"
      :hide-default-footer="items.length < 11"
      :items="items"
      :items-per-page="pageSize"
      :page-count="pageCount"
      :id="id"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>
            <v-icon color="medium-emphasis" icon="mdi-book-multiple" size="x-small" start></v-icon>
            {{ title }}
          </v-toolbar-title>
          <BaseButton
            class="me-2"
            variant="outlined"
            prepend-icon="mdi-plus"
            rounded="lg"
            :label="addButtonText"
            @click="doAction('add')"
          />
        </v-toolbar>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <div class="d-flex ga-2 justify-end">
          <v-icon v-for="action in actions" :key="action" :color="medium-emphasis"
            :icon="getIcon(action)" size="small" @click="doAction(action, item.id)">
          </v-icon>
        </div>
      </template>

      <template v-slot:no-data>
        <v-alert :value="true">
          No data available
        </v-alert>
      </template>
    </v-data-table>
  </v-sheet>
</template>

<style scoped>
#shared-table {
  height: 70vh;
}
</style>

