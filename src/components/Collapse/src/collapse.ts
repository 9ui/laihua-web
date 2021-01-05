// eslint-disable-next-line
import { Emitter } from 'mitt';
import { Ref } from '@vue/composition-api';

export interface CollapseProvider {
  activeNames: Ref;
  collapseMitt: Emitter;
}
