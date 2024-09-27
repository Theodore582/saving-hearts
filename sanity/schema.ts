import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemaTypes/block-content';
import longContent from './schemaTypes/long-content';
import {
  ABOUTPAGE,
  HOMEPAGE,
  PROJECTPAGE,
  APP,
  News,
  Event,
  Cause,
  Footer,
  Project,
} from './schemaTypes';


export const schema: { types: SchemaTypeDefinition[]; } = {
  types: [
    blockContent,
    longContent,

    HOMEPAGE,
    ABOUTPAGE,
    PROJECTPAGE,
    APP,
    
    News,
    Event,
    Cause,
    Footer,
    Project,

  ],
};

