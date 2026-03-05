const findTheOldest = function(people) {
    return people.reduce ((oldest, person) => {
        const currentYear = new Date().getFullYear();

        const agePerson = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        const ageOldest = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

        return agePerson > ageOldest ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
