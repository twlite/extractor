import { Attachment } from './internal/Attachment';
import { Facebook } from './internal/Facebook';
import { Vimeo } from './internal/Vimeo';
import { AppleMusic } from './internal/AppleMusic';

export const internal = { Attachment, Facebook, Vimeo, AppleMusic };
export * as Attachment from './Attachment';
export * as Facebook from './Facebook';
export * as Reverbnation from './Reverbnation';
export * as Vimeo from './Vimeo';
export * as Lyrics from './ext/Lyrics';
export * as AppleMusic from './AppleMusic';

export const version = require('../package.json').version as string;
