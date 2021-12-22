import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { HomeService } from '../services/home.service';
declare var $ : any; 


@Component({
  selector: 'app-sidebar-contacto',
  templateUrl: './sidebar-contacto.component.html',
  styleUrls: ['./sidebar-contacto.component.css']
})
export class SidebarContactoComponent implements OnInit {

  public form: any;
  data:any = [];
  url:string;
  formulario: FormGroup;

  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService, private fb: FormBuilder) {
    this.form = {
      empresa: '',
      nombre: '',
      telefono: '',
      email: '',
      producto: this.url,
      acepto: ''
    };
    this.crearFormulario();
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      empresa: ['', Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      producto: ['SMARTSALES', Validators.required],
      acepto: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  reason = '';
  
  public cierraTrabajemos() {
    $('.overlaytrabaja').removeClass('active');
    $("#wrapper").toggleClass("toggled");
  }

  enviarForm(form: any) {
    if(this.formulario.invalid && !this.formulario.get('acepto')!.value){
      return Object.values( this.formulario.controls ).forEach(control => {
        control.markAsTouched();
      });
    }

    if(this.formulario.invalid){
      return Object.values( this.formulario.controls ).forEach(control => {
        control.markAsTouched();
      });
    }

    if(!this.formulario.get('acepto')!.value){
      alert('Debes aceptar Terminos y condiciones');
      return;
    }
    $.ajax({
      url: `${environment.domain}/wp-content/plugins/form-contactenos/mailProducts.php`,
      type: 'POST',
      data: JSON.stringify(this.form),
      dataType:"json",
      success: function(data: any) {
      }, error: function(error: any){
        if(error.status === 200){
          Swal.fire({
            icon: 'success',
            title: 'Gracias por regalarnos tus datos. Nos comunicaremos contigo.',
            showConfirmButton: true
          }); 
        
        } else {
          Swal.fire('Oops...', 'Algo pasó. Corrige los errores, por favor!', 'error')
        }
      }
    });
    this.formulario.reset();
    this.cierraTrabajemos();
   }
}
