import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Film } from '../model/film';
import { FilmService } from '../model/film-service';

@Component({
  selector: 'app-search-by-title',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-by-title.html',
  styleUrl: './search-by-title.css'
})
export class SearchByTitle {
  filmService = inject(FilmService);
  film: Film | any;
  formTitle: FormGroup

  constructor(private fs: FilmService, private fb: FormBuilder) { 
    this.formTitle = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  search(): void {
    const title = this.formTitle.value.title;

    if(!title) return;

    this.fs.getFilmbyTitle(title).subscribe((res: Film) => {
      this.film = res;
    });
}}
