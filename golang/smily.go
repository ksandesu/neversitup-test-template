package main

import (
	"regexp"
)

func CountSmilyFace(text []string) int {
	count := 0
	for _, face := range text {
		matched, _ := regexp.Match(`^(?:\:|\;)(?:-|~)?(?:\)|D)$`, []byte(face))
		if matched {
			count++
		}

	}

	return count
}
