import { Component, OnInit } from '@angular/core';
import { BookListModel } from '../model/BookList.model';
import { BooksService } from './books.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books-home',
  templateUrl: './books-home.component.html',
  styleUrls: ['./books-home.component.css']
})
export class BooksHomeComponent implements OnInit {

  public booksDetails: Array<BookListModel> = [];
  public searchTerm: any;
  public visible: boolean = false;
  public addBookForm: FormGroup;
  public displayMessage: string = "";
  public dateInput: any;
  public isCreateNewBook: boolean = false;

  constructor(private booksService: BooksService, private datePipe: DatePipe, private activatedRoute: ActivatedRoute) {
    activatedRoute.url.subscribe(url => {
      if (url[0].path == "create-new-book") {
        this.visible = true;
      }
    })
  }

  ngOnInit(): void {
    this.setAddBookForm();
    this.getBooksDetails();
    if (this.isCreateNewBook) {
      this.showDialog();
    }
  }

  setAddBookForm() {
    this.addBookForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      author: new FormControl([], Validators.required),
      publisher: new FormControl(null, Validators.required),
      publishedDate: new FormControl(null, Validators.required)
    });
  }

  getBooksDetails() {
    if (typeof (localStorage.getItem("book-details")) != 'undefined' && localStorage.getItem("book-details") != null) {
      this.booksDetails = JSON.parse(localStorage.getItem('book-details')!);
    } else {
      this.booksService.getBooksDetails().subscribe(response => {
        if (typeof (response) != 'undefined' && response != null) {
          if (typeof (response.items) != 'undefined' && response.items != null && response.items.length > 0) {
            let str: any = "Not Available";
            response.items.forEach((item: any) => {
              let bookList: BookListModel = new BookListModel();
              bookList.authors = item.volumeInfo.authors ? item.volumeInfo.authors[0] : str;
              bookList.title = item.volumeInfo.title;
              bookList.publisher = item.volumeInfo.publisher;
              bookList.publishedDate = item.volumeInfo.publishedDate;
              this.booksDetails.push(bookList);
            });
          }
          this.sortBookDetails();
          localStorage.setItem("book-details", JSON.stringify(this.booksDetails));
          console.log(this.booksDetails);
        }
      }, error => {
        console.log(error);
      });
    }

  }

  showDialog() {
    this.visible = true;
  }

  sortBookDetails() {
    this.booksDetails = this.booksDetails.sort((a, b) => {
      let first: any = new Date(a.publishedDate);
      let second: any = new Date(b.publishedDate);
      return second - first;
    });
  }

  onAddBookSubmit() {
    let bookDetail: BookListModel = new BookListModel();
    bookDetail.title = this.addBookForm.get("title")?.value;
    bookDetail.authors = this.addBookForm.get("author")?.value;
    bookDetail.publisher = this.addBookForm.get("publisher")?.value;
    let date = this.addBookForm.get("publishedDate")?.value;
    date = this.datePipe.transform(date, 'yyyy-MM-dd');
    bookDetail.publishedDate = date;
    this.booksDetails.push(bookDetail);
    this.sortBookDetails();
    localStorage.setItem("book-details", JSON.stringify(this.booksDetails));
    this.visible = false;
    this.addBookForm.reset();
  }

}
