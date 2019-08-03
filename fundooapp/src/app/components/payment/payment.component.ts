import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/userService/user-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public serviceCard = [];
  public value = 30;
  public show: Boolean = true;
  public hide: Boolean = true;
  public peek: Boolean = true;
  public address: string;
  public cartId: string;
  public service:Object;
  constructor(public userService: UserServiceService) { }

  ngOnInit() {
    this.getProductCart();
  }
  getProductCart() {
    this.userService.getProductCart().subscribe(response => {
      console.log("Response to get user service", response);
      this.serviceCard = response['data']
      console.log("Service cards", this.serviceCard)
      this.service=this.serviceCard[0];
      console.log("service is",this.service)
    }, error => {
      console.log("Error in getting user service", error);
    })
  }
  valueChange() {
    this.value = 50;
  }
  valueChange2() {
    this.value = 85;
  }
  placeOrder() {
    console.log("in place order");
    console.log("address is", this.address)
    this.cartId = localStorage.getItem('cartId');
    console.log("Cart id in payment is", this.cartId);
    const orderDetails = {
      "cartId": this.cartId,
      "address": this.address
    }
    this.userService.placeOrder(orderDetails).subscribe(response => {
      console.log("Response to place order", response);


    }, error => {
      console.log("Error in placing order", error);
    })
  }
  completeOrder(){
    console.log("in complete order");
    this.cartId = localStorage.getItem('cartId');
    console.log("cart is",this.cartId);
    const Id={
      "cartId":this.cartId,
    }
    this.userService.completeOrder(Id).subscribe(response => {
      console.log("Response to place order", response);


    }, error => {
      console.log("Error in placing order", error);
    })
  }
}
