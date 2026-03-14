---
title: "Dynamic scheduling engine"
subtitle: "Operational scheduling rebuilt for sub-second decisions"
summary: "Designed and optimized a slot-based scheduling engine for high-volume booking, rescheduling, and cancellation workflows."
year: "Recent work"
status: "Featured"
featured: true
order: 1
tech:
  - "Python"
  - "Scheduling services"
  - "Database optimization"
  - "Caching"
  - "API performance"
toolsTitle: "Built with modern backend tools"
tools:
  - "Performance-focused API design"
  - "Database and query path optimization"
  - "Caching and request-path tuning"
  - "Operational scheduling logic"
special:
  - "Cut latency from roughly 30 seconds to under one second."
  - "Handled around 1,000 requests per second in a critical operational workflow."
  - "Treated correctness, concurrency, and availability as first-class design constraints."
metrics:
  - "~30s -> <1s"
  - "~1,000 req/sec"
  - "97.5% latency improvement"
audience:
  - "Staff Engineer"
  - "Lead Engineer"
  - "Platform roles"
---
## What I built

I designed and optimized a slot-based scheduling engine that handled booking, rescheduling, updates, and cancellations in a high-volume operational workflow. The core system had to make fast decisions about availability and capacity while still preserving correctness under load.

This was not just an endpoint optimization exercise. The real work was in shaping the scheduling path end to end so the system could respond quickly without introducing bad slot calculations, race conditions, or brittle service behavior.

## How I approached it

I treated the scheduling flow as a system problem rather than a single-layer problem. That meant looking at API shape, database access patterns, caching opportunities, and the logic that actually determined whether a slot should be considered available.

The design work focused on the performance-critical path:

- reducing expensive work on requests that happened repeatedly
- tightening the data-access path for availability decisions
- separating scheduling logic that needed to stay synchronous from work that could be simplified or deferred
- making the highest-concurrency parts of the workflow cheaper and more predictable

## Tradeoffs and key decisions

The main tradeoff was speed versus correctness. It would have been easy to optimize for average-case latency and still leave edge cases around concurrency, stale availability, or incorrect rescheduling outcomes.

Instead, I optimized around operational trust:

- availability calculations had to stay correct under load, not just look fast in isolated testing
- performance work had to improve the path users actually waited on, rather than moving cost into a different hidden bottleneck
- caching and query tuning had to support correctness, not undermine it

That meant being deliberate about where the system could take shortcuts and where it could not.

## Results and impact

The final workflow moved from roughly 30 seconds to under one second and supported around 1,000 requests per second. That change materially improved service responsiveness in a part of the product where latency directly affected user experience and operational throughput.

This is one of the strongest case studies in the portfolio because it combines system design, performance engineering, and practical business impact in a single backend workflow.
