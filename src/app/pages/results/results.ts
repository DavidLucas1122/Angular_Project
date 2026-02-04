import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../services/posts';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.html'
})
export class ResultsComponent implements OnInit {
  images: string[] = []
  breed = ''

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.breed = this.route.snapshot.paramMap.get('breed')!

    this.postsService.getDogsByBreed(this.breed).subscribe(res => {
      this.images = res.message;
      this.cdr.detectChanges();
    })
  }
}
