import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { UserServiceService } from '../services/user-service.service';
import { HelpersService } from '../services/helpers.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


    constructor(private userService:UserServiceService,public helper :HelpersService){

    }
    customers!: any[];

    representatives!: any[];
    visible :boolean=false
    statuses!: any[];
    selected_id:number=0;
    loading: boolean = true;

    activityValues: number[] = [0, 100];
    basicData: any = {
        labels: [],
        datasets: [
            {
                label: 'Cvs',
                data: [],
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    };;
   

    ngOnInit() {
      console.log(this.basicData)

        this.getUsersWithCVCount()

       

       this.getUsers()
        
            // this.customers = [{
            //     id: 1000,
            //     name: 'James Butt',
            //     country: {
            //         name: 'Algeria',
            //         code: 'dz'
            //     },
            //     company: 'Benton, John B Jr',
            //     date: '2015-09-13',
            //     status: 'unqualified',
            //     verified: true,
            //     activity: 17,
            //     representative: {
            //         name: 'Ioni Bowcher',
            //         image: 'ionibowcher.png'
            //     },
            //     balance: 70663
            // },];
            this.loading = false;

           
       

        
    }

    clear(table: Table) {
        table.clear();
    }

    getUsers(){
        this.userService.getUsers().then((data: any) => {
            this.customers=data
          console.log(this.customers)
         })
    }

    getUsersWithCVCount(){
        this.userService.getUsersWithCVCount().then((data: any) => {
            data.forEach((element: any[]) => {             
                    this.basicData.labels.push(element[0].username)
                    this.basicData.datasets[0].data.push(element[1])
           
          });
           
            console.log(this.basicData)
         })
    }

showDialog(id:number){
    this.visible=true
    this.selected_id=id
    console.log(this.selected_id)
}

    deleteUser(){
         var indexToDelete = -1;       this.visible=false;
       
        this.customers = this.customers .filter(item => item.id != this.selected_id);
       this.userService.deleteUser(this.selected_id).then((data: any) => {
       
       })
    }
  


}
