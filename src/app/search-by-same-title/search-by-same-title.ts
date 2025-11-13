import { Component, inject } from '@angular/core';
import { Film } from '../model/film';
import { FilmService } from '../model/film-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-by-same-title',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-by-same-title.html',
  styleUrl: './search-by-same-title.css'
})
export class SearchBySameTitle {

  filmService = inject(FilmService);
  films: Film[] = [];
  formTitle: FormGroup

  constructor(private fs: FilmService, private fb: FormBuilder) { 
    this.formTitle = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  search(): void {
    const title = this.formTitle.value.title;

    if(!title) return;

    this.fs.getFilmbySameTitle(title).subscribe((res: any) => {
      this.films = res.Search;
    });

}}
