import {Injectable} from '@angular/core';
import {Updates} from './updates';
import {UPDATES} from '../mocks/updates.mock';

@Injectable()
export class UpdatesService {
  getUpdates(): Promise<Updates[]>{
    return Promise.resolve(UPDATES);
  }
}
