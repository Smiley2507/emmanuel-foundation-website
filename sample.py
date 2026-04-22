def solution(numbers):

result = []
    for i in range (len(numbers) - 2):
    a, b, c =  numbers[i] , numbers [i+1],numbers
    
    if(a<b>c) or (a>b<c):
        result.append(1)
    else:
        result.append(0)

return result