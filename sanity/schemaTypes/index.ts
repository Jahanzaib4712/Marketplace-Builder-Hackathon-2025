import { type SchemaTypeDefinition } from 'sanity'
import helicopters from './helicopters'
import blockContents from './blockContents'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [helicopters, blockContents],
}
