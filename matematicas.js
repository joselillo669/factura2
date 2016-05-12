function iva(precio,tipo)
{
	return precio*tipo/100;
}

function NosoloNumeros(numero)//esta funcion devuelve falsew si el texto que recibe solo lleva digitos
{
	var digitos="0123456789";
   	for(i=0; i<numero.length; i++)
   	{
      if (digitos.indexOf(numero.charAt(i),0)!=-1)
	   	{
        	 return false;
      	}
   	}
   return true;
}

function tiene_letras(texto)
{
	var letras2="abcdefghyjklmnñopqrstuvwxyz ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
   	for(i=0; i<texto.length; i++)
   	{
      if (letras2.indexOf(texto.charAt(i),0)!=-1)
/* charAt extrae cualquier letra (caracterEn) en el DNI (texto) introducido.
IndexOf busca en la cadena cualquier caracter de mi array letras2. 
El cero es para que arranque a comparar desde la posicion cero de la cadena letras_mayusculas
Si llego al menos 1 es que logré salir del if y no encontró ninguna letra */
      	{
        	 return true;
      	}
   	}
   return false;
}

function letraDNI()
{
	var letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
	if (DNI_C.value==null) 
		{
			alert("vacío");
		}
	if (tiene_letras(DNI_C.value) || (DNI_C.value==""))
	{
		alert("DNI inválido");
		DNI_C.value="";
		DNI_C.focus();
// Para que vacíe el valor del DNI_C y no siga comprobando indefinidamente
	}
	else
	{
		var numero=parseInt(DNI_C.value);
		Letra_C.value=letras[numero%23];
	}
}

function RecorrerTabla()
{
	var tabla2=document.getElementById("TablaConceptos");
	var x=tabla2.getElementsByTagName("td");
	// Crea un array con todos los elementos td de esa tabla
	acumulador=0.0;
	for (i=2; i<=x.length; i=i+6) //tengo 30 casillas, me sitúo en la tercera y salto de 5 en 5
	{
	//	alert(x[i].innerHTML); //muestro cada valor que coje
		sb=parseFloat(x[i].innerHTML)*parseInt(x[i+1].innerHTML);
		x[i+2].innerHTML=sb.toLocaleString('sp-SP',{style:'currency',currency:'EUR'}); //el valor sb lo meto en las casillas (i+2) de la tabla
		acumulador=acumulador+sb; //valor de la celda
	}
//	subtotal.value=acumulador.toFixed(2)+" €";
//	alert(acumulador.toLocalString());
//  toLocaleString me pone la separación de los miles
/*	//Opcion 1:*/
	subtotal.value=parseFloat(acumulador.toFixed(2)).toLocaleString()+" €";
	temp_dto=acumulador*parseFloat(dto.value)/100;
	valordto.value=parseFloat(temp_dto.toFixed(2)).toLocaleString()+" €";
	temp_total=acumulador-temp_dto;
	neto.value=parseFloat(temp_total.toFixed(2)).toLocaleString()+" €";
	temp_iva=iva(temp_total,parseInt(tipo.value));
	valoriva.value=parseFloat(temp_iva.toFixed(2)).toLocaleString()+" €";
	temp_pagar=temp_total+parseFloat(temp_iva);
	total.value=parseFloat(temp_pagar.toFixed(2)).toLocaleString()+" €";
	//Opción 2:
/*	subtotal.value=acumulador.toLocaleString('sp-SP',{style:'currency',currency:'EUR'});
	valordto.value=(acumulador*parseFloat(dto.value)/100).toLocaleString('sp-SP',{style:'currency',currency:'EUR'});
	total.value=(acumulador-parseFloat(valordto.value)).toLocaleString('sp-SP',{style:'currency',currency:'EUR'});
	valoriva.value=(iva(parseFloat(total.value),parseFloat(tipoiva.value))).toLocaleString('sp-SP',{style:'currency',currency:'EUR'});
	pagar.value=(parseFloat(total.value)+parseFloat(valoriva.value)).toLocaleString('sp-SP',{style:'currency',currency:'EUR'});
*/
}
//	toFixed me trunca y redondea el valor a dos decimales y el +" €" me concatena el euro
//	alert(acumulador);
//	temp_valoriva=temp_subtotal2*parseFloat(tipo.value)/100;