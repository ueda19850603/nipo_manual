<template>
<span class="dark-mode-widget">
    <input type="checkbox" id="theme-toggle" @click="toggleDarkTheme"></input>
    <label for="theme-toggle"><span></span></label>
</span>
</template>

<script>
export default {
mounted() {
    this.checkUserPreference();
},
methods: {
    toggleDarkTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    //If dark mode is selected
    if (body.classList.contains("dark-mode")) {
        //Save user preference in storage
        localStorage.setItem("dark-theme", "true");
    //If light mode is selected
    } else {
        body.classList.remove("dark-mode");
        setTimeout(function() {
        localStorage.removeItem("dark-theme");
        }, 100);
    }
    },
    checkUserPreference(){
        //Check Storage on Page load. Keep user preference through sessions
        if (localStorage.getItem("dark-theme")) {
            document.body.classList.add("dark-mode");
            document.getElementById('theme-toggle').checked = true;
        }
    }
}
};
</script>

<style lang="stylus">
.dark-mode-widget
    display: block
    margin: 1em auto

body.dark-mode
    background: #333
    table thead
        background: pink
    table tbody tr:nth-child(odd) td
        background: black
        color: white
    table tbody tr:nth-child(even) td
        background: #333
        color: white
    .medium-zoom-overlay
        background: #333 !important
    h1,h2,h3,h4,h5,h6,p,li
        color: #f1f1f1
    .custom-block.tip .custom-block-title
    .custom-block.tip p,
    .custom-block.tip li
    .says p
        color: #000
        color:#000
    .custom-block.danger p,
    .custom-block.danger li
        color: #990000
    header
        .dropdown-title
            color: white
        .nav-item
        .nav-link
            color: white
        .dropdown-wrapper
            color: red !important
            .dropdown-title .title a
                color: red !important
        background: #333
        .links
            background: #333
            color: white
        .site-name
            color: white
    .sidebar
        color:white
        background: #333
        a
            color: white
        a:hover
            font-weight:bold
            color:white
        .btn-gradient-simple
            color: white !important
#theme-toggle
    display: none
#theme-toggle + label
    font-size: 2rem
    display: flex
    width: 4em
    border-radius: 2em
    background-size: auto 8em
    background-position: bottom
    background-image: linear-gradient(180deg, #021037 0%, #20206A 19%, #4184B1 66%, #62E7F7 100%)
    transition: .2s
    border: 0.125em solid #eef3f6
    overflow: hidden
#theme-toggle + label span
    background: #fffad8
    border-radius: 50%
    height: 2em
    width: 2em
    transform: translateX(-.125em) scale(.65)
    transition: .2s
    cursor: pointer
    box-shadow: 0 0 .25em .0625em #fbee8d, 0 0 2em 0 #FFEB3B, inset -.25em -.25em 0 0 #fbee8e, inset -.3125em -.3125em 0 .625em #fff5b2
    margin-top: -.125em
#theme-toggle:checked
    font-size: 10rem
#theme-toggle:checked + label
    background-position: top
    border-color: #5983a6
#theme-toggle:checked + label span
    background: transparent
    transform: translateX(calc(100%)) scale(.65)
    box-shadow: inset -.1875em -.1875em 0 0 #fbe7ef, inset -.5625em -.5625em 0 0 #fffff7
</style>