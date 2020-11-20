var tab_item = document.querySelectorAll("." + "tab_item");
var tab_content = document.querySelectorAll('.tabs-content .container');
/*show border*/
function selectItem(i) {
    tab_item.forEach(item => item.classList.remove('tab-border'));
    this.classList.add('tab-border');
}
tab_item.forEach(item => item.addEventListener('click', selectItem));
/*show content*/
tab_item.forEach((tab, tab_index) => {
    tab.addEventListener("click", () => {
        tab_content.forEach((content, content_index) => {
            if (tab_index == content_index) {
                content.classList.add('active');
            }
            else content.classList.remove('active');
        })
    })
})