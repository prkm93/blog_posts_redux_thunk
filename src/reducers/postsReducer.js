export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS' : 
            return action.payload;
        default:
            return state;
    }
}


// METHODS TO UPDATE ARRAY/OBJECTS WITHOUT MUTATING ORIGINAL ARRAY/OBJECTS
//                                   DONT'S                DO'S                                                                        
// Removing element from array -- state.pop() -- state.filter(element => element !== 'hi');
// Adding element to array -- state.push('h1') --  [...state, "hi"]
// Replacing element in an array -- state[0]='h1' -- state.map(el => el === 'h1' ? "bye" : el);

// Updating property in object -- state.name = 'Sam' -- {...state, name: 'Sam'}
// Adding property in object -- state.age = 30 -- {...state, age: 20}
// Removing property in object -- delete state.name -- {...state, age: undefined} , _omit(state, 'age')

// ***** All addition of properties in object is evaluated from left to right.
// ex - var profile = {name: "alex", age: 20}
//                    {name:"pradeep", ...profile} // overrides name with name of profile
// evaluation is from left to right always.