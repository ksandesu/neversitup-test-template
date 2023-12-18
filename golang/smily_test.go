package main

import (
	"testing"
)

func TestCountSmilyFace(t *testing.T) {
	case1 := CountSmilyFace([]string{":)", ";(", ";}", ":-D"})
	case2 := CountSmilyFace([]string{";D", ":-(", ":-)", ";~)"})
	case3 := CountSmilyFace([]string{";]", ":[", ";*", ":$", ";-D"})

	if case1 != 2 {
		t.Errorf(" CountSmilyFace([]string{\":)\", \";(\", \";}\", \":-D\"}) != %d", case1)
	}

	if case2 != 3 {
		t.Errorf("CountSmilyFace([]string{\";D\", \":-(\", \":-)\", \";~)\"} != %d", case2)
	}

	if case3 != 1 {
		t.Errorf("CountSmilyFace([]string{\";]\", \":[\", \";*\", \":$\", \";-D\"}) != %d", case3)
	}
}
