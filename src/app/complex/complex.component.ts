import { Component, OnInit } from '@angular/core';
import { Complex } from '../complex';
import { ComplexService } from '../complex.service'

@Component({
  selector: 'app-complex',
  templateUrl: './complex.component.html',
  styleUrls: ['./complex.component.css']
})
export class ComplexComponent implements OnInit {

  complexs: Complex[] | undefined;
  ComplexSelected: number | undefined;
  lslocation: Location[] | undefined;

  constructor(private complexService: ComplexService) { }
  
  ngOnInit(): void {
    this.complexService.getUsers().subscribe((data: Complex[]) => {
      console.log(data);
      this.complexs = data;
    });
  }
}
