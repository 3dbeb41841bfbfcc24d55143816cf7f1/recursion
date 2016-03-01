'use strict';

function Person(name, children) {
  this.name = name;
  this.children = children || [];
}

function indent(level) {
  return Array(level * 2).join(" ");
}

function printPerson(person, generation) {
  generation = generation || 0;
  console.log(indent(generation) + person.name);
  person.children.forEach(function(child) {
    printPerson(child, generation+1);
  });
}

Person.prototype.print = function() {
  printPerson(this);
}

var john    = new Person('John');
var mary    = new Person('Mary');
var emily   = new Person('Emily', [john, mary]);
var melody  = new Person('Melody', [emily]);

var madelyn = new Person('Madelyn');
var joseph  = new Person('Joseph');
var lila    = new Person('Lila', [madelyn, joseph]);
var jewell  = new Person('Jewell', [lila]);
var lucas   = new Person('Lucas');
var clay    = new Person('Clay', [lucas]);
var cindy   = new Person('Cindy', [melody, jewell, clay]);

cindy.print();
