import { createGlobalStyle } from 'styled-components' // 表示全局样式


export const GlobalIconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1544406916704');                                     /* IE9*/
    src: url('./iconfont.eot?t=1544406916704#iefix') format('embedded-opentype'),   /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAW8AAsAAAAACFAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8gkpDY21hcAAAAYAAAABqAAABstKKnaBnbHlmAAAB7AAAAcMAAAHsHrYALGhlYWQAAAOwAAAALwAAADYThxT5aGhlYQAAA+AAAAAcAAAAJAfeA4ZobXR4AAAD/AAAAA4AAAAUFAAAAGxvY2EAAAQMAAAADAAAAAwA+AF4bWF4cAAABBgAAAAfAAAAIAETADxuYW1lAAAEOAAAAUUAAAJtPlT+fXBvc3QAAAWAAAAAOQAAAEoOT4m8eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeMbwIZG7438AQw9zA0AMUZgTJAQDjvAxCeJztkbENgDAMBM/BIBRRMwU1NStkDyqGjtgiODYFQ/DRRfHLdvEBRmAwNkNBLoSu01xxfyC7rxxWZ2YSqVLXut+lNfi+X4n1xenb1SZsl0z8Wvw+3kp7ekH/hboG7u+BZcddAuQBPCkXjwAAeJw1kM9u00AQxmd2u7uKBHZIY5uUOGrs2kmI6kRObKMKUlcqfyrUHnpAqCAqVS1VkmOCcjVCVD0QKbwC71AuiFIOvUNPfQYegFPrsimgkb5v5pvDjH5AAK4SKguyUAZAUUJNQREII+hg1HYb12NeNyIPp4lGLra8Jj06TJLjS7Z6ca3x34h83fKGK4dHNE6SmF0ev/j07p/H/xcwI+9d0RMKIECFBWgAlO1KWdjYmqVuxeaCsrDlm2gHNrctN2gvY9u2hKGgltdbfvgAycnrJ+n5wz1Ud1b7jBMmenje7AzuYXnFi3qv4qXGdtWcn3OaZ2cU0houZ117Nv3OisPTRtisPVNuPHWes2JBK/pOCQAkAwD6mJxCARwApxJGYdsjlkLyJeJHYWTofug6HlYkgBLKV2hncier1zf2B/sb9akFd62PPHcT08nuAaUHu3tT3UmsajTqby4ubvalebdz82+5mluj425vTOm41x0DSh5D+kXyNwEMFxydC64i1yPZKGiEulTBidRHGXyPvwk1neg+rw9m1j9QtG6NuuLn6M1nRlvrC+TbLwycWrDEVD8zMVHLCLrNXhaq6Q+Nz/0BWOprswB4nGNgZGBgAOIl05cWxfPbfGXgZmEAgRvGL1oQ9P8SFgbmBiCXg4EJJAoAQO8K9QB4nGNgZGBgbvjfwBDDwgACQJKRARWwAgBHCwJueJxjYWBgYEHDAAEEABUAAAAAAAAAOACCAMAA9nicY2BkYGBgZTBgYGEAASYg5gJCBob/YD4DAA3dAVAAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicY2BigAAuBuyAlZGJkZmRhZGVkY2BpbggM4/JMZErLTEvPSUxKzMvnb2yNDcxPymTgQEAlb8JnQAAAA==') format('woff'),
    url('./iconfont.ttf?t=1544406916704') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1544406916704#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
    font-family            : "iconfont" !important;
    font-size              : 16px;
    font-style             : normal;
    -webkit-font-smoothing : antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;
