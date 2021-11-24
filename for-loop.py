def sum(*args):
  sum = 0
  for i in args:
    sum += i
  return sum
first_num = 2
second_num = 3
print(sum(first_num, second_num))
