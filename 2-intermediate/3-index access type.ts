type Animal = {
    name: string
    legs: number
    skill: {
        run: boolean
        fly: boolean
    }
}

type animalSkills = Animal['skill']