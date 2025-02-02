import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Your Project Title',

  projectId: 'yourActualProjectId',
  dataset: 'yourActualDataset', 

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [], 
  },
})