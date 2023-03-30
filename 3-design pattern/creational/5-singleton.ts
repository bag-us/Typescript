class Profile {
    private static instance: Profile
    private firstname: string = ""
    private lastname: string = ""

    public static getInstance(): Profile{
        if(!Profile.instance){
            Profile.instance = new Profile()
        }
        return Profile.instance
    }

    getFullname(): string{
        // akses db = select user ....
        this.firstname = "as"
        this.lastname = "ba"
        return `${this.firstname} ${this.lastname}`
    }
}
const profile = Profile.getInstance()
console.log(profile.getFullname())

const profile2 = Profile.getInstance()
console.log(profile.getFullname())

console.log(profile === profile2) // true = tidak perlu akses db lagi