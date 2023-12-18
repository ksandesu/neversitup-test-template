package main

import (
	"testing"
)

func TestFindOddNumber(t *testing.T) {
	case1 := FindOddNumber([]int{7})
	case2 := FindOddNumber([]int{0})
	case3 := FindOddNumber([]int{1, 1, 2})
	case4 := FindOddNumber([]int{0, 1, 0, 1, 0})
	case5 := FindOddNumber([]int{1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1})

	if case1 != 7 {
		t.Errorf("FindOddNumber([]int{7}) != %d", case1)
	}

	if case2 != 0 {
		t.Errorf("FindOddNumber([]int{0}) != %d", case2)
	}

	if case3 != 2 {
		t.Errorf("FindOddNumber([]int{1, 1, 2}) != %d", case3)
	}

	if case4 != 0 {
		t.Errorf("FindOddNumber([]int{0, 1, 0, 1, 0}) != %d", case4)
	}

	if case5 != 4 {
		t.Errorf("FindOddNumber([]int{1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1}) != %d", case5)
	}

}
