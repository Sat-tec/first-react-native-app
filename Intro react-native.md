1) ## What is React Native? ##
ANS=>
React Native is a framework for building mobile applications using JavaScript and React. It allows developers to write mobile apps using familiar web development techniques. With React Native, you can create cross-platform apps that work on both iOS and Android using a single codebase. It's like having a magic bridge that lets you use your web development skills to create mobile apps.

2) ## What is Components in react native? ##
ANS=>
In simple terms, React Native components are like building blocks used to create the user interface (UI) of mobile applications. Think of them as Lego bricks that you can put together to construct different parts of your app, such as buttons, text inputs, images, and more.

Each React Native component represents a specific piece of the UI, and you can customize and combine them to design how your app looks and behaves. For example, you might use a "Button" component to add a clickable button to your app, or a "TextInput" component to allow users to enter text.

React Native provides a set of pre-built components that you can use out-of-the-box, and you can also create your own custom components to suit your app's specific needs. These components are written in JavaScript and follow the principles of React, making it easy to create interactive and dynamic user interfaces for both iOS and Android platforms. 

In React Native, there are mainly two types of components:

1) Functional Component:
A functional component is like a basic function in JavaScript. It's a simple and lightweight way to describe what should appear on the screen.
Details: It's a JavaScript function that returns what looks like HTML (but it's actually JSX). You can pass some information to it, and it will use that information to decide what to show on the screen. It's easy to understand and use.

2)Class Component:
A class component is like a more organized version of a functional component. It can do more things and keep track of more information.
Details: It's like a blueprint for making something more complex. It's written in a special way using classes in JavaScript. It can keep track of its own information and do more advanced things, like connecting to the internet or remembering what the user did before. It's a bit more complex but powerful when you need it.

3) ## What is JSX in react native? ##
ANS=>
In simple terms, JSX in React Native is a way to write code that looks a lot like HTML but is actually JavaScript. It stands for JavaScript XML. JSX allows developers to describe what the user interface of their app should look like in a format that's easy to understand and write.

For example, instead of writing complex JavaScript code to create UI elements like buttons, text inputs, or images, JSX lets you write code that closely resembles HTML. Here's an example:

```without jsx

let button = document.createElement("button");
button.textContent = "Press Me";

button.style.backgroundColor = "#841584";
button.style.color = "#ffffff"; // Text color

button.addEventListener("click", function() {
  alert("Hello!");
});

document.body.appendChild(button);

```

```with jsx
<Button
  onPress={() => alert('Hello!')}
  title="Press Me"
  color="#841584"
/>
```

This JSX code creates a button component with a specific title and color. Under the hood, JSX gets converted into regular JavaScript code by a process called transpilation, so the React Native runtime can understand and execute it properly.

In summary, JSX makes it easier for developers to write and maintain UI code in React Native by providing a familiar syntax that resembles HTML but is actually JavaScript.