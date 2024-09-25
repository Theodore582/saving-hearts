import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemaTypes/block-content';
import longContent from './schemaTypes/long-content';
import {
  ABOUTPAGE,
  HOMEPAGE,
  APP,
  News,
  Event,
  Cause,
  Footer
} from './schemaTypes';


export const schema: { types: SchemaTypeDefinition[]; } = {
  types: [
    blockContent,
    longContent,

    HOMEPAGE,
    ABOUTPAGE,
    APP,
    
    News,
    Event,
    Cause,
    Footer,

  ],
};

