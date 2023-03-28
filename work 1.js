let test = prompt ('введите число');
test = +test;
alert (typeof test);

if (test% 2 === 0) {
  alert ('Чётное');
}
else if (test% 1 ===0) {
  alert ('Нечётное');
}
else {
  alert ('Упс, кажется вы ошиблись');
}
if (test > 0) {
  alert (true);
}
else if (test < 0) {
  alert (false);
}
else {
  alert (false);
}
