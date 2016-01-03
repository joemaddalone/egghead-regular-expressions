# Javascript Regular Expressions
===

## 01. Introduction

In this lesson we'll learn two ways to construct a Regular Expression in Javascript, explore the methods available to us directly from the RegExp constructor,  use Regular Expressions with String.prototype methods, and build a simple regex highlighter.


## 02. Find Plain Text Patterns (text, dots, and metacharacters)

The simplest use of Regular Expressions is to find a plain text pattern.  In this lesson we'll look at at finding plain text patterns as well as using the metacharacter "." and how to escape a metacharacter.

## 03. Find Repeated Patterns (Quantifiers/Shorthands)

Regular Expression Quantifiers allow us to identifiy a repeating sequence of characters of minimum and maximum lengths.  In this lesson we'll use Regular Expression Quantifiers to match repeated patterns, common Quantifier patterns, and using shorthand for those common Quantifier patterns.

## 04. Find Sets of Characters (Character Classes)

Regular Expression Character Classes define a group of characters we can use in conjunction with quantifiers.

## 05. Use Shorthand to Find Common Sets of Characters (Character Class Shorthands)

In this lesson we'll learn shorthands for common character classes as well as their negated forms.

## 06. Find Groups of Characters (Capturing Groups)

In this lesson we'll capture groups of characters we wish to match, use  quantifiers with those groups, and use references to those groups in String.prototype.replace.

## 07. Find a String that Precedes Another String (Lookaheads)

Lookaheads allow us to match a pattern followed by another pattern without including the second pattern in our match.

## 08. Find the Start and End of Words (Word Boundaries)

Regular Expression Word Boundaries allow to preform "whoe word only" searches within out source string.

## 09. Match the Same String Twice (Back References)

Regular Expression Backreferences provide us a method to match a previously captured pattern a second time.


## Notes


* Metacharacters: [, {, (, ), \, ^, $, ., |, ?, *, +

--

* Quantifiers /aaaa/ matches 4
* Quantifiers /a{4}/ matches 4
* Quantifiers /a{4,}/ at least 4 (greedy)
* Quantifiers /a{4,6}/ at least 4, no more than 6
* Quantifiers /a{0,}/  === /a*/ will match 0 to infinity
* Quantifiers /a{1,}/  === /a+/ will match 1 to infinity
* Quantifiers /a{0,1}/  === /a?/ will match 1 or empty string

--


* Character Classes [hbc] matches h or b or c
* Character Classes [hbc]at matches hat or bat or cat
* Character Classes [^hbc]at matches .at but not hat, bat, or cat (negation)
* Character Classes [a-z]at matches hat or bat or cat, but not Hat
* Character Classes [a-zA-Z]at matches hat or bat or cat or Hat
* Character Classes [a-zA-Z0-9]at matches hat or bat or cat or Hat or 0at
* Character Classes [a-zA-Z0-9?-]at matches hat or bat or cat or Hat or 0at -at * or ?at
  * not escaping metacharacters in character classes

--

* Character Class Shorthands
* \w      any letter, but not unicode
* \d      any integer
* \s      any whitespace
* [^\w]   negated \w
* \W      negated \w
* \D      negated \d
* \S      negated \s
* [^\r\n] === .

--

* Capturing
* (head|foot)er
* (?:head|foot)er opt out of capturing

--

* combine:
* [a-f\d{3}]{1,2} will match #ccc #cccccc # c0fee
