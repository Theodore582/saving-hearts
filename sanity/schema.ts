import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemaTypes/blockContent';
import longContent from './schemaTypes/longContent';


export const schema: { types: SchemaTypeDefinition[]; } = {
  types: [
    blockContent,
    longContent,

    // HOMEPAGE,
    // ABOUTPAGE,
    // MUSICPAGE,
    // SPEAKINGPAGE,
    // ICHURCHPAGE,

    // events,

    // category,
    // news,


  ],
};

