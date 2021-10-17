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
    // logContent() gets the content and writes it to the console
    // this.contentfulObject = this.contentful.logContent("Entry ID");

    // getContent() gets the content from contentful using the Entry ID and sets it to the contentfulObject.
    this.contentfulObject = this.contentful.getContent('Entry ID'); 
    
    // Entry ID is obtained from within Contentful
    // Top Menu -> Content -> Content Object -> Info -> Entry ID
  }

}
