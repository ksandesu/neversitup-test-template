package main

import (
	"slices"
	"strings"
)

func Manipulate(text string) []string {
	if len(text) == 1 {
		return []string{text}
	} else {
		return shuffle(text)
	}
}

func reverse(text string) string {
	textArr := strings.Split(text, "")
	for i, j := 0, len(textArr)-1; i < j; i, j = i+1, j-1 {
		textArr[i], textArr[j] = textArr[j], textArr[i]
	}

	return strings.Join(textArr, "")
}

func popAt(text []string, at int) (string, []string) {
	result := text[at]

	return result, append(text[:at], text[at+1:]...)
}

func insertAt(text []string, at int, ch string) []string {
	if at == 0 {
		return append([]string{ch}, text...)
	} else if at > len(text) {
		return append(text, ch)
	} else {
		return append(text[:at], append([]string{ch}, text[at:]...)...)
	}

}

func shuffle(text string) []string {
	result := []string{}
	var store map[string]bool = make(map[string]bool)

	for i := 0; i < len(text); i++ {
		for j := 0; j < len(text); j++ {
			var root string
			tmp := strings.Split(text, "")
			root, tmp = popAt(tmp, i)
			tmp = insertAt(tmp, j, root)

			store[strings.Join(tmp, "")] = true
			store[reverse(strings.Join(tmp, ""))] = true
		}
	}

	for k := range store {
		result = append(result, k)
	}

	slices.Sort(result)

	return result
}
