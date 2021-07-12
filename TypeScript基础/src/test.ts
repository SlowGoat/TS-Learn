enum Gender {
  Male = 0,
  Female = 1
}

let i: {name: string, gender: Gender}
i = { name: 'hhh', 
      gender: Gender.Male 
    }

console.log(i.gender === Gender.Male);

export default void 0



