def fact(n)
  n > 1 ? n * fact(n - 1) : 1
end

puts fact(5)

def fact_loop(n)
  (1..n).reduce(:*)
end

puts fact_loop(5)
