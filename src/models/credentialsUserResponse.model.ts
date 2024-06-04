export class CredentialsUserResponse {
    id:string='';
    email: string='';
    code?: string='';
    username?:string="";
    expiration?:Date | undefined;
    sucessed:string="0";
    token:string="";
    
  
  
    constructor(){}
  
  }