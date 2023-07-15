
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  shownav: boolean = true

  cvs:any;
  selectedcv:any=null;



  formatDateMonthName(date: Date) {
    if (!date) return "";
    let newDate = new Date(date);
    let year = newDate.getFullYear();
    let month = (newDate.getMonth() + 1) < 10 ? "0" + (newDate.getMonth() + 1) : (newDate.getMonth() + 1);
    let day = newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
    const monthNames = ["Janvier", "février", "mars", "avril", "Mai", "juin",
      "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = days[newDate.getDay()];
    let hours = newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours();
    let minutes = newDate.getMinutes() < 10 ? "0" + newDate.getMinutes() : newDate.getMinutes();
    return dayName + " " + day + " " + monthNames[newDate.getMonth()] + " " + year + " " + hours + ":" + minutes;
  }

  formatDateMonthYear(date: Date) {
    if (!date) return "";
    let newDate = new Date(date);
    let year = newDate.getFullYear();
    let month = (newDate.getMonth() + 1) < 10 ? "0" + (newDate.getMonth() + 1) : (newDate.getMonth() + 1);
    let day = newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
    const monthNames = ["Janvier", "février", "mars", "avril", "Mai", "juin",
      "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = days[newDate.getDay()];
    let hours = newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours();
    let minutes = newDate.getMinutes() < 10 ? "0" + newDate.getMinutes() : newDate.getMinutes();
    return  monthNames[newDate.getMonth()] + " " + year ;
  }


  formatDate(date: Date) {
    if (!date) return "";
    let newDate = new Date(date);
    let year = newDate.getFullYear();
    let month = (newDate.getMonth() + 1) < 10 ? "0" + (newDate.getMonth() + 1) : (newDate.getMonth() + 1);
    let day = newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
    return day + "/" + month + "/" + year;
  }
}
