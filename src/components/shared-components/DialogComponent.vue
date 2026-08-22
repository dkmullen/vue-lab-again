<script setup></script>

  <v-dialog v-model="dialog" max-width="500">
    <v-card
      :subtitle="`${isEditing ? 'Update' : 'Create'} your favorite book`"
      :title="`${isEditing ? 'Edit' : 'Add'} a Book`"
    >
      <template v-slot:text>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="formModel.title" label="Title"></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field v-model="formModel.author" label="Author"></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-select v-model="formModel.genre" :items="['Fiction', 'Dystopian', 'Non-Fiction', 'Sci-Fi']" label="Genre"></v-select>
          </v-col>

          <v-col cols="12" md="6">
            <v-number-input v-model="formModel.year" :max="currentYear" :min="1" label="Year"></v-number-input>
          </v-col>

          <v-col cols="12" md="6">
            <v-number-input v-model="formModel.pages" :min="1" label="Pages"></v-number-input>
          </v-col>
        </v-row>
      </template>
      <v-divider></v-divider>
      <v-card-actions class="bg-surface-light">
        <v-btn text="Cancel" variant="plain" @click="dialog = false"></v-btn>
        <v-spacer></v-spacer>
        <v-btn text="Save" @click="save"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
