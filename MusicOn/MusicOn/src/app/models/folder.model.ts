// folder.model.ts
import { Song } from './song.model';

export interface Folder {
  name: string;
  password: string;
  songs: Song[];
}
