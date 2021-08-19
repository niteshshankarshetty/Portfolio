import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  // headers = ["Id", "Name", "Email", "Mobile"];
  // setColors=["green, blue, red, yellow, pink, orange"]
  rows: any = [
    {
      id: '1',
      taskName: 'Angular design',
      date: '21/08/2012',
      github: 'https://github.com/',
    },
    {
      id: '2',
      taskName: 'React Code',
      date: '22/08/2012',
      github: 'https://github.com/',
    },
    {
      id: '3',
      taskName: 'HTML Code',
      date: '23/08/2012',
      github: 'https://github.com/',
    },
    {
      id: '4',
      taskName: 'CSS Design',
      date: '24/08/2012',
      github: 'https://github.com/',
    },
    {
      id: '5',
      taskName: 'Bootstrap',
      date: '25/08/2012',
      github: 'https://github.com/',
    },
    {
      id: '6',
      taskName: 'Javascript',
      date: '26/08/2012',
      github: 'https://github.com/',
    },
  ];

  showBody: boolean = false;
  allData: any = {};

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    let randomcolor = 0;
    this.rows.forEach((val: any) => {
      val.firstLetter = val.taskName.charAt(0);
      // randomcolor= Math.floor(Math.random() * this.setColors.length);
      val.bgColor = this.getRandomColor();
    });
    console.log(this.rows);
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  openBox(data: any) {
    console.log(data);
    this.showBody = true;
    this.allData = data;
  }
  contactForm() {
    console.log('form');
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogFormComponent, {
      width: '600px',
      height: '80%',
    });
    dialogRef.afterClosed().subscribe((taskForm) => {
      console.log(taskForm);
      taskForm.date = formatDate(taskForm.date, 'dd/MM/yyyy', 'en-US');
      this.rows.push(taskForm);
    });
  }
}
