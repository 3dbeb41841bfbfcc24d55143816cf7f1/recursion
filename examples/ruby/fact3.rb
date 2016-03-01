def get_indent(n)
  ' ' * (2 * n)
end

def fact(n)
  puts get_indent(10-n) + "fact called with n = #{n}"
  if n == 1
    puts get_indent(10-n) + 'returning 1'
    return 1
  else
    puts get_indent(10-n) + "calling fact(#{n - 1})"
    f = fact(n - 1)
    puts get_indent(10-n) + "multiplying #{n} * fact(#{n - 1})"
    result = n * f
    puts get_indent(10-n) + "returning #{n} * fact(#{n - 1}) = #{result}"
    return result
  end
end

puts get_indent(10-5) + 'calling fact(5)'
# puts get_indent(10-5) + "#{fact(5)}"
puts fact(5)
