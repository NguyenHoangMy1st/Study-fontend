const lastName = "Kin";

const sum = (a, b) => a + b;

const element = (
  <h1>
    Hello, world!. I am {lastName}. I am {sum(10, 11)}
  </h1>
);

// Tên thuộc tính phải chuyển thành camelCase
const element2 = (
  <a href="google.com" tabIndex="11" className="123" id="the-a">
    Google
  </a>
);

const element3 = <h3 />;

const element4 = <img src="" />;

const element5 = <input type="text" />;

const comment = `<script>console.log("send token")</script>`;
    
const element6 = <h1 className="greeting">Hello, world!</h1>;
