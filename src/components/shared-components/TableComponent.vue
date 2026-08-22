<script setup>

defineProps({
  headers: { type: Array },
  items: { type: Array },
  title: { type: String, default: 'Table' },
  addButtonText: { type: String, default: 'Add' },
})

const emit = defineEmits(['doAction'])

function doAction(action, id) {
  emit('doAction', { action, id })
}

</script>

 <template>
  <v-sheet border rounded>
    <v-data-table
      :headers="headers"
      :hide-default-footer="items.length < 11"
      :items="items"
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
          <v-icon color="medium-emphasis" icon="mdi-eye" size="small" @click="doAction('view', item.id)"></v-icon>
          <v-icon color="medium-emphasis" icon="mdi-pencil" size="small" @click="doAction('edit', item.id)"></v-icon>
          <v-icon color="medium-emphasis" icon="mdi-delete" size="small" @click="doAction('delete', item.id)"></v-icon>
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

