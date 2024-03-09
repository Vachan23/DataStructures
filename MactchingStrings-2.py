def matchingStrings(strings, queries):
    result=[]
    for i in range(len(queries)):
        count=0
        for j in range(len(strings)):
            if queries[i]==strings[j]:
                count+=1
        result.append(count)
    return result

def matchingStringsNew(strings, queries):
    s = Counter(strings)
    result = []
    for q in queries:
        result.append(s[q])
    return result