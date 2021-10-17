import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ContentfulService } from './../../services/contentful.service';

@Component({
  selector: 'app-example-contentful-component',
  templateUrl: './example-contentful-component.component.html',
  styleUrls: ['./example-contentful-component.component.css']
})
export class ExampleContentfulComponentComponent implements OnInit {
  contentfulObject: Observable<any>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.contentfulObject = this.contentful.getContent('Entry ID');
    // Content -> Content Object -> Info -> Entry ID
  }

}
