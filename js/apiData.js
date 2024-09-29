const people = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    occcupation: 'Web Developer',
    contact: {
      email: 'john.doe@gmail.com',
    },
    address: {
      street: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      zip: '94109',
    },
    social: {
      twitter: '@johndoe',
    },
    hobbies: ['Conding', 'Hiking', 'Photography'],
  },
  {
    id: 2,
    name: 'Mark Jakarburg',
    age: '34',
    occcupation: 'Marketing Manager',
    contact: {
      email: 'mark.jakarburg@gmail.com',
      phone: '123 4556 211',
    },
    hobbies: ['Running', 'Golf'],
  },
  {
    id: 3,
    name: 'Bill Gates',
    age: 72,
    occcupation: 'Owner: MicroSoft',
    contact: {
      email: 'bill.gates@gmail.com',
      phone: '425 2622 987',
    },
    address: {
      street: '232 564 2111',
      city: 'Chicago',
      state: 'LI',
      zip: '51671',
    },
    hobbies: ['Running', 'Golf'],
  },
];

const peopleList = document.getElementById('people-list');
const personInfo = document.getElementById('person-info');

const renderPeopleList = people => {
  people.map(person => {
    const li = document.createElement('li');
    li.classList.add(
      'cursor-pointer',
      'text-blue-500',
      'md:text-xl',
      'text-md',
      'p-2'
    );
    li.textContent = person.name;
    peopleList.appendChild(li);
  });
};

renderPeopleList(people);
