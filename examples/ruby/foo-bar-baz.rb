def foo(x)
  bar(x+1)
end

def bar(y)
  baz(y*10)
end

def baz(z)
  z + 2
end

puts "The answer is: #{foo(3)}"
