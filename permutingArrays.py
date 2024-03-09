import math
import os
import random
import re
import sys

def twoArrays(k, A, B):
    # Write your code here
    A = sorted(A)
    B = sorted(B, reverse = True)
    for i in range(len(A)):
        if A[i] + B[i] < k:
            return "NO"
    return "YES"
   