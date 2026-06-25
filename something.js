function upDate(previewPic) {
    console.log("Mouse over event triggered");
    
    let displayDiv = document.getElementById("image-display");
    
    // Đổi hình nền của div thành ảnh bạn vừa di chuột vào
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Đổi chữ bên trong div thành alt text của ảnh
    displayDiv.innerHTML = previewPic.alt;
}

function unDo() {
    let displayDiv = document.getElementById("image-display");
    
    // Đưa mọi thứ về trạng thái ban đầu
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}