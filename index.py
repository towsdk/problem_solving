# from typing import List

# class Solution:
#     def rotate(self, nums: List[int], k:int) -> List:
#         k = k % len(nums)
#         l = 0; r = len(nums) - 1
#         # return r
#         while l < r:
#             nums[l], nums[r] = nums[r], nums[l]
#             l = 1 + l; r = r - 1
#         l = 0; r = k - 1
#         while l < r:
#             nums[l], nums[r] = nums[r], nums[l]
#             l, r = 1 + l, r - 1
#         l = k ; r = len(nums) - 1
#         while l < r:
#             nums[l], nums[r] = nums[r], nums[l]
#             l, r = 1 + l, r - 1
#         return nums

# final = Solution()
# res = final.rotate([1,2,3,4,5], 2)
# print(res)


# def array(nums: list)->list:
#     return nums.reverse()
# res = array([1,2,3,4,5])
# print(res)


# list = [1, 2, 3, 4, 5]
# list.reverse()
# print(list)

# from typing import List
# def findDpulicate(nums: List) -> List:
#     duplicates = []
#     for i in range(len(nums)):  #first for loop
#         for j in range(i+1,len(nums)):
#          if nums[i] == nums[j]:
#             duplicates.append(nums[i])

#     return duplicates
# nums = [1, 2, 3, 1, 4, 5, 3, 8, 9, 4, 9]
# ans = findDpulicate(nums)
# print(ans)


# from typing import List
# class TwoSum:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:
#         prevMap = {} #val : index

#         for i, value in enumerate(nums):
#             diff = target - value
#             if diff in prevMap:
#                 return [prevMap[diff], i]
#             prevMap[value] = i
#         return 
# twoSum = TwoSum()
# print(twoSum.twoSum([1,2,4,3], 5))


# hashMap = {
#     "name" : "jewel",
#     "age" : 31,
#     "height" : 5.6,
#     "profession" : "Innertight",
# }

# print(hashMap["name"])


# ans = int(6.0)
# print(ans)

# 394. Target Sum 

# from typing import List
# class TargetSum:
#     def __init__(self, target: int):
#         self.target = target

#     def targetSum(self,nums: List[int]) -> int:
#         count = 0
#         for i in range(len(nums)):
#             sum = -nums[i]
#             for j in range(1, len(nums)):
#                 sum = sum + nums[j]
#             if sum == self.target:
#                 count = count + 1
#         return count        


# tgs = TargetSum(3)
# ans = tgs.targetSum([1,1,1,1,1])
# print(ans)

# from typing import List
# class TargetSum:
#     def findTargetSumWays(nums: List[int], target: int) -> int:
#         dp = {}

#         def backTrack(i, total):
#             if i == len(nums):
#                 return 1 if total == target else 0
#             if (i, total) in dp:
#                 return dp[(i, total)]
#             dp[(i, total)] = (backTrack(i + 1, total + nums[i]) +
#                                 backTrack(i + 1, total - nums[i]))
#             return dp[(i, total)]
#         return backTrack(0,0)
    
# tgs = TargetSum
# ans =tgs.findTargetSumWays([1,1,1,1,1,1], 4)
# print(ans)













# from typing import List
# class DynamicProblemSolution:
#     def minimumCost(days: List[int], costs: List[int]) -> int:
#         dp = {}
#         def dfs(i):
#             if i == len(days):
#                 return 0
#             if i in dp:
#                 return dp[i]
#             dp[i] = float("inf") 
#             for d, c in zip([1, 7, 30], costs):
#                 j = i 
#                 while j < len(days) and days[j] < days[i] + d:
#                     j += 1
#                 dp[i] = min(dp[i], c + dfs(j)) 
#                 print( "i",i,"c=",c,"d=",d,"dfs[=",j,"]", dfs(j))
#             print(i, '&', dp[i])
#             return dp[i]
#         return dfs(0)
# dfs = DynamicProblemSolution
# ans = dfs.minimumCost([1,4,6,7,8,20], [2, 7, 15])
# # ans = dfs.minimumCost([1,2,3,4,6,7,8,20], [2, 7, 15])
# print(ans)

# class Solution:
#     def maxSubArray( nums:list[int])-> int:
#         maxSub = nums[0]
#         currentSum = 0
#         for n in nums:
#             if currentSum < 0:
#                 currentSum = 0
#             currentSum += n
#             maxSub = max(maxSub, currentSum)
#         return maxSub
# mxS = Solution
# ans = mxS.maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
# print(ans)


# def majorityElement(nums: list[int]) -> int:
#     count = {}
#     res, maxCount = 0, 0

#     for n in nums:
#         count[n] = 1 + count.get(n, 0)
#         res = n if count[n] > maxCount else res
#         print(res, count[n])
#         maxCount = max(count[n], maxCount)
#     return res 

# print(majorityElement([3,2,3]))


# thisList = ["apple", "banana", "cherry"]
# print("before remove",len(thisList))
# thisList.pop(1)
# print("after pop", len(thisList))





# list = [1,2,3,4,5,6,7,8,9]
# print(range(len(list)))




# class Duplicates2:
#     def __init__(self) -> None:
#         pass
#     def removeDuplicates(nums: list)-> list:
#         k = 2
#         for n in range(2, len(nums)):
#             if (nums[n] == nums[n-1]) and (nums[n-1] == nums[n-2]):
#                 continue
#             nums[k] = nums[n]
#             k += 1
#         return k,nums

# dpc = Duplicates2
# print(dpc.removeDuplicates([1,1,1,2,2,2,3,4]))




# def findNum(x =[]):
#     x.append(1)
#     return x
# print(findNum())
# print(findNum())

a = [1,2,3,4]
b = a
b.append(5)
print(a)
print(b)





























