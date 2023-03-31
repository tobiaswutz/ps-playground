export class User {
  public id: number | null | undefined;
  public account_created: Date | null | undefined;
  public last_login: Date | null | undefined;
  
  constructor(
    public email: string,
    public name: string,
    public last_name: string,
    public phone_number: string,
    public location: string,
    public age: number,
    public alias_name: string,
    public online: boolean,
    public avatar_url: string
  ) {}
}

