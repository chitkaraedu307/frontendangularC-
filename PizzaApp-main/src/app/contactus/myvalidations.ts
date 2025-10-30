import { AbstractControl } from "@angular/forms";


// a class to read the value from input element

export function checkalphebet(txtval:AbstractControl)
{
var res = txtval.value
 return res.startsWith('A')?null : {msg:true}
}

