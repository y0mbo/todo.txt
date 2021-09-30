# ADR 002 - Use iCalendar Format

## Context

The Duet application allows users to create their task lists in a calendar format.

There is a universally adopted standard for calendar events called iCalendar.

## Decision

Duet will use iCalendar as the data format for its calendar events.

## Status

2021-09-29 Approved

## Consequences

Tracking so many calendar items in a single calendar could lead to performance issues as the iCalendar format is text heavy.

## Reference

* [iCalendar on Wikipedia](https://en.wikipedia.org/wiki/ICalendar)