This is a learning project created with the help of AI tools in Visual Studio Code. Some bugs are intentionally left in the source code so I can practice debugging and fixing issues.

### Learning Journal – Day 1 (Pomodoro Timer Debugging)

Today, I worked on fixing the Pomodoro Timer application. The main goal was to improve how the timer counts down and make it more stable.

At first, the timer did not behave correctly. It sometimes skipped numbers, slowed down, or stopped unexpectedly. This made the app unreliable from a user’s perspective.

After reviewing the code, I learned that the issue was related to how state is updated inside `setInterval`. The timer was using an outdated value of time, which caused inconsistent behavior.

To fix this, I changed the state update to use a functional update:

Instead of decreasing time directly, I used a function that always receives the latest state. This helped ensure the timer updates correctly every second.

I also improved the structure of the code by separating concerns:

* One effect handles the timer interval
* Another effect handles switching between work and break modes

After applying these changes, the timer became smooth and consistent. It now counts down correctly without freezing or jumping.

Through this task, I gained a better understanding of:

* How React state works in asynchronous functions
* Why closures can cause bugs in React
* The importance of using proper dependencies in `useEffect`

Overall, this was a challenging but valuable learning experience. I feel more confident working with React hooks now.