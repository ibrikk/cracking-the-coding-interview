const Call = () => {
  this.customer = null;
  this.issue = null;
  this.resolved = null;
}

const Employee = (name, id) => {
  this.name = name;
  this.id = id;
  this.available = true;
}

Employee.prototype.answerCall = () => {
  let newCall = new Call();

  console.log("Hello, my name is " + this.name + ".");

  newCall.customer = prompt("Who am I speaking with?");
  newCall.issue = prompt("What can I help you with?");
  
  if (this.checkKnowledgeBase(newCall)) {
    console.log("Thanks for calling. Let us know if there is anything else to help with.");
  } else {
    this.available = false;
    console.log("Based on the number of customers, I should be able to get back to you in " + this.queue.length * 5 + " minutes.");
  }
  return this.available;
}

Employee.prototype.checkKnowledgeBase = currCase => {
  switch (currCase.issue) {
    case currCase.issue.indexOf('login'):
      console.log("Sure I can help you you login to your account.");
      currCase.resolved = true;
      break;

    case currCase.issue.indexOf("billing") :

      console.log("Yes, let me connect you with a billing representative.");
      currCase.resolved = true;
      break;

    case currCase.issue.indexOf("order") :

      console.log("Absolutely, I'll check on your order status right now.");
      currCase.resolved = true;
      break;

    case currCase.issue.indexOf("refund") :

      console.log("I'm sorry it's not working out. We'll issue a full refund.");
      currCase.resolved = true;
      break;

    default : 

      console.log("Thanks, it looks like I'll need to research your question further. Let me escalate to the right person and get back to you shortly.");
      break;
  }
  return currCase;
}

const Respondent = (name, id) => {
  Employee.call(this, name, id);
  this.role = 'Team Lead';
}

Manager.prototype = Object.create(Employee.prototype);

const Director = (name, id) => {
  Employee.call(this, name, id);
  this.role = 'Department Head';
}

Director.prototype = Object.create(Employee.prototype);

const Team = () => {
  this.department = "Customer Service";
  this.employees = [];
  this.callQueue = [];
  // More flexible to have divisions for different employee types, but all pushed to single array for simplicity
  this.employees.push(new Respondent("Joe", "2345"), new Respondent("Jill", "4567"), new Respondent("Jack", "9876"), new Manager("Jason", "7654"), new Director("Julie", "1234"));
  // Track employees who are free
  this.employeesOccupied = 0;
}

Team.prototype.newCall = () => {
  if (this.employeesOccupied >= this.employees.length) {
    console.log("Please hold, an employee will be with you shortly.");
  }

  let currCall = this.employees[this.employeesOccupied].answerCall();
  if (!currCall.resolved) {
    this.employeesOccupied++;
    this.callQueue.push(currCall);
  }
};