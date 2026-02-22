1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

   > > getElementById returns one element by its unique id, getElementsByClassName returns a live collection of elements by class name, querySelector use CSS selectors where the first returns the first match, and querySelector retrns all matches.

2. How do you create and insert a new element into the DOM?

   > > At first create the element, then configure its content and attributes, and finally append it to an existing element in the document.

3. What is Event Bubbling? And how does it work?

   > > Event Bubbling means when you click on a child element, the event moves up to its parent elements one by one.

4. What is Event Delegation in JavaScript? Why is it useful?

   > > Event Delegation means adding one event listener to a parent element to handle events for its child elements, and it is useful because it saves code, improves performance, and works for new elements added later.

5. What is the difference between preventDefault() and stopPropagation() methods?
   > > preventDefault() stops the browser from doing its normal action (like opening a link or submitting a form), while stopPropagation() stops the event from going to parent elements.
