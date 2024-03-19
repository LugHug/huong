const signinbtnlink = document.querySelector('.signinbtn-link');
const signupbtnlink = document.querySelector('.signupbtn-link');
const wrapper = document.querySelector('.wrapper');


signupbtnlink.addEventListener('click', () => {
    wrapper.classList.toggle('active')
});

signinbtnlink.addEventListener('click', () => {
    wrapper.classList.toggle('active')
});

//Đầu tiên, nó lấy ra các phần tử HTML có lớp tương ứng là .signinbtn-link, .signupbtn-link, và 

//.wrapper bằng cách sử dụng phương thức document.querySelector().

// Sau đó, nó thêm một sự kiện 'click' cho phần tử có lớp .signupbtn-link. Khi phần tử này được
// nhấp vào, nó sẽ thực hiện một hành động: chuyển đổi trạng thái của phần tử có lớp .wrapper bằng 
//cách thêm hoặc xóa lớp .active thông qua phương thức classList.toggle().

// Tương tự, nó thêm một sự kiện 'click' cho phần tử có lớp .signinbtn-link, và khi được nhấp vào, 
//cũng sẽ thực hiện hành động tương tự như trên: chuyển đổi trạng thái của phần tử .wrapper bằng cách thêm hoặc xóa lớp .active









// Lấy thẻ form đăng nhập và thẻ form đăng ký
const loginForm = document.querySelector('.sign-in form');
const signupForm = document.querySelector('.sign-up form');

// Thêm sự kiện ngăn chặn mặc định của form khi được submit
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form
    // Thực hiện xác thực tài khoản ở đây

    // Sau khi xác thực, chuyển hướng đến trang Home
    window.location.href = "./Home.html";
});

// Thêm sự kiện ngăn chặn mặc định của form khi được submit
signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form
    // Thực hiện đăng ký tài khoản ở đây

    // Sau khi đăng ký, chuyển hướng đến trang Home
    window.location.href = "./Home.html";
});
