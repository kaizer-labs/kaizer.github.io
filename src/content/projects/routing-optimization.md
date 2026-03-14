---
title: "Routing optimization engine"
subtitle: "Modeling real field constraints across 800+ locations"
summary: "Designed routing optimization for mobile technicians across multi-location field operations, using travel time, service duration, and time windows instead of simplistic distance logic."
year: "Recent work"
status: "Featured"
featured: true
order: 3
tech:
  - "Backend services"
  - "Optimization logic"
  - "Travel-time modeling"
  - "Operational workflows"
toolsTitle: "Built with modern operational design"
tools:
  - "Constraint-aware route planning"
  - "Travel and traffic modeling"
  - "Schedule interaction handling"
  - "Operational performance measurement"
special:
  - "Improved on-time appointments by 40%."
  - "Reduced missed or rescheduled appointments by 50%."
  - "Handled routing complexity across 800+ locations."
metrics:
  - "800+ locations"
  - "+40% on-time"
  - "-50% reschedules"
audience:
  - "Staff Engineer"
  - "Forward Deployed roles"
  - "Lead Engineer"
---
## What I built

I designed routing optimization logic for mobile technicians operating across hundreds of locations. The problem was not simply generating routes. The system had to account for how routing decisions affected schedule quality, on-time service, and downstream reschedules.

That made it an operations system, not just an algorithm exercise.

## How I approached it

The routing model was built around real service constraints:

- travel time between locations
- traffic and time-window effects
- service duration on site
- interaction between routing quality and appointment outcomes

The design focused on making the model operationally truthful. Instead of treating the problem like shortest-distance planning, the system had to reflect the conditions that actually determined whether a technician could complete work on time.

## Tradeoffs and key decisions

The major tradeoff was simplicity versus real-world usefulness. A simpler model would have been easier to build, but it would also have produced routes that looked good on paper and failed in practice.

The key decision was to bias toward operational accuracy:

- encode real service constraints rather than abstract optimization shortcuts
- optimize for service outcomes, not just route elegance
- treat routing as part of a larger scheduling and field-operations system

That choice made the logic more valuable because it aligned the technical system with what the business actually needed.

## Results and impact

The routing work supported operations across 800+ locations, improved on-time appointments by 40%, and reduced missed or rescheduled appointments by 50%.

This is one of the clearest examples in the portfolio of backend and systems work driving directly visible operational outcomes.
