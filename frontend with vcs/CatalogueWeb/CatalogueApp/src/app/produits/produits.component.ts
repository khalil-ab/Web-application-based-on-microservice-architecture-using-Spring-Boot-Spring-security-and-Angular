import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../catalogue.service";
import {ActivatedRoute, NavigationEnd, Route, Router} from "@angular/router";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
products;
url:string;
  constructor(private catalogueService:CatalogueService,
              private router:Router,
              private route:ActivatedRoute) {
    router.events.subscribe(events=>{
      if(events instanceof NavigationEnd){
        let url=atob(route.snapshot.params.urlProds);
        //console.log(url)
        this.getProducts(url)
      }
    })
    //console.log(route.snapshot.params.urlProds)
  }

  ngOnInit() {
  }

  getProducts(url){
    this.catalogueService.getRessource(url)
      .subscribe(data=>{
        this.products=data;
      },err=>{
        console.log(err)
      })
  }


}
