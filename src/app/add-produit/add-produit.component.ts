import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
})
export class AddProduitComponent implements OnInit {

    newProduit = new Produit();

    message: string = '';
    categories! : Categorie[];
    newIdCat! : number;
    newCategorie! : Categorie;
    
    
  constructor(private produitService: ProduitService, private router :Router,){
    
  }
  ngOnInit(): void {
  }
  /* addProduit(){
    // console.log(this.newProduit);
    this.newCategorie =
this.produitService.consulterCategorie(this.newIdCat);
this.newProduit.categorie = this.newCategorie;

    this.produitService.ajouterProduit(this.newProduit);
    this.message="produit "+this.newProduit.nomProduit+"ajouter avec succes"
    this.router.navigate(['produits']);
    } */
    addProduit(){
      this.produitService.ajouterProduit(this.newProduit)
      .subscribe(prod => {
      console.log(prod);
      this.router.navigate(['produits']);
      });
      }
      
}
