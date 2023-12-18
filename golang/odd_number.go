package main

func counter(numbers []int) map[int]int {
	result := make(map[int]int)
	for i := 0; i < len(numbers); i++ {
		result[numbers[i]]++
	}

	return result
}

func FindOddNumber(numbers []int) int {
	counts := counter(numbers)
	nums := []int{}

	for k := range counts {
		nums = append(nums, k)
	}

	for i := 0; i < len(nums); i++ {
		if (counts[nums[i]])%2 != 0 {
			return nums[i]
		}
	}

	return 0
}
