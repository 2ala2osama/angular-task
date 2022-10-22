import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    contacts: Contact[] = [

        {
            id: 1,
            fName: 'Adeel',
            lName: 'Ahmed',
            job: 'Software eng',
            telNum: 1123456789,
            email: 'abc@gmail.com',
            date: new Date()
        },


    ]
    constructor() { }


}
