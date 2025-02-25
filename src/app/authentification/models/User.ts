
export class User {
    private email!: string;
    private motPass!:string;
    private firstName!:string;
    private lastName!:string;
    public role!:string;

    

    getEmail(): string {
        return this.email;
    }

    getMotPass(): string {
        return this.motPass;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getRole(): string {
        return this.role;
    }

    // Setters
    setEmail(email: string): void {
        this.email = email;
    }

    setMotPass(motPass: string): void {
        this.motPass = motPass;
    }

    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    setRole(role: string): void {
        this.role = role;
    }

}