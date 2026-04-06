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

---

### Learning Journal – Day 2 (Fixing Control Logic)

Today, I continued improving the Pomodoro Timer application, focusing on the control features (Start, Pause, Reset).

I noticed that the Reset function was not working correctly. When I pressed Reset, the time returned to 25 minutes, but the timer kept running. This created a poor user experience.

After reviewing the logic, I realized that resetting the time alone was not enough. The timer was still running because the `isRunning` state remained true.

To fix this, I updated the Reset function by stopping the timer first, and then resetting the time. This helped the application behave as expected.

From this task, I learned that:

* State in React needs to be controlled consistently
* It’s not enough to change data — you also need to control behavior
* Control logic is just as important as the UI

After applying these changes, the application became more accurate and easier to use.

---

### Learning Journal – Day 3 (UI and Display Improvements)

Today, I completed the Pomodoro Timer application by improving the user interface and time display.

Previously, the timer displayed time in an unclean format, such as “5:3” instead of “05:03”. This made the application look less professional.

I fixed this by using the `padStart` method to ensure that both minutes and seconds are always displayed with two digits.

In addition, I made small UI adjustments to help users easily recognize the current mode (working or break), such as changing colors for each mode.

From today’s work, I learned that:

* User experience (UX) is very important
* Small details can make a big difference
* A good application should not only work correctly but also be easy to look at and use

After three days, I successfully completed the Pomodoro Timer application and gained a better understanding of React hooks and state management.