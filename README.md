
# Change Detection Demo in Angular

This mini project demonstrates Angular's change detection mechanisms through two child components:

##  Features
- `DefaultChildComponent` uses Angular's default change detection.
- `OnPushChildComponent` uses `ChangeDetectionStrategy.OnPush` for performance optimization.

##  How to Use

1. Run the app.
2. Click on:
   - `Increment Parent`: Updates both components.
   - `Mutate Object`: Only the default component updates.
   - `Replace Object`: Both components update (new reference triggers OnPush).

##  Components

- `AppComponent`: Contains buttons and data.
- `DefaultChildComponent`: Logs every detection cycle.
- `OnPushChildComponent`: Logs only on input reference changes.

## 🚀 Run Locally

```bash
npm install
ng serve
```

##  Learnings

- `Default` strategy checks on every change.
- `OnPush` requires **immutable changes** to inputs.
- Optimize with `ChangeDetectorRef.markForCheck()` if needed.

---
