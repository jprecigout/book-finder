import { Injectable } from '@angular/core';
import { Book } from './book.model';
import * as _ from 'lodash';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';

export interface State {
  filter: String;
  types: String[];
  books: Book[];
}

const state: State = {
  filter: '',
  types: ['Author', 'Title', 'Type'],
  books: []
};

@Injectable()
export class BookService {

  private bookDictionnary: Array<Book> = [];
  private subject = new BehaviorSubject<State>(state);
  store = this.subject.asObservable().distinctUntilChanged();

  constructor() {

    this.bookDictionnary.push(new Book(1, 'Scala pas à pas', 34, 'Gildas Ménier', 'Langage', 5));
    this.bookDictionnary.push(new Book(2, 'Programmation par l\'exemple en Caml', 25.40, 'Louis Gacogne', 'Langage', 4));
    this.bookDictionnary.push(new Book(3, 'Intelligence artificielle', 26, 'Louis Gacogne', 'IA', 5));
    this.bookDictionnary.push(new Book(4, 'Prolog - Programmation par l\'exemple', 30, 'Louis Gacogne', 'Langage', 1));
    this.bookDictionnary.push(new Book(5, 'Eléments de logique floue', 33, 'Louis Gacogne', 'IA', 2));
    this.bookDictionnary.push(new Book(6, 'Apprentissage machine de la théorie à la pratique - Concepts fondamentaux en Machine Learning',
    39, 'Massih-Reza Amini', 'IA', 1));
    this.bookDictionnary.push(new Book(7, 'Algorithmes génétiques et réseaux de neurones', 59, 'Jean-Michel Renders', 'Algorithmie', 3));
    this.bookDictionnary.push(new Book(8, 'Scrum', 33, 'Claude Aubry', 'Methodologie', 5));

  }

  private findByAuthor(author: String) {
    return _.filter(this.bookDictionnary, (bk) => {if (_.includes(_.lowerCase(bk.author), _.lowerCase(author))) {return bk; }});
  }

  private findByType(type: String) {
    return _.filter(this.bookDictionnary, (bk) => {if (_.includes(_.lowerCase(bk.type), _.lowerCase(type))) {return bk; }});
  }

  private findByTitle(title: String) {
    return _.filter(this.bookDictionnary, (bk) => {if (_.includes(_.lowerCase(bk.title), _.lowerCase(title))) {return bk; }});
  }

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  search(filter: String, filterTypes: String[]) {

    let result = [];

    if (_.isEqual(filterTypes.length, 0)) {
      result = _.union(this.findByAuthor(filter), _.union(this.findByTitle(filter), this.findByType(filter)));
    } else {
      result = _.uniq(_.flatMap(filterTypes, (elt: String) => {
         if (_.isEqual('Author', elt)) {
            return this.findByAuthor(filter);
          } else if (_.isEqual('Title', elt)) {
            return this.findByTitle(filter);
          } else if (_.isEqual('Type', elt)) {
            return this.findByType(filter);
          }
        }));
    }

    const value = this.subject.value;
    this.subject.next({ filter: filter, types: value.types, books: result });
  }

}
