document.body.addEventListener("click", () => {
  const dropDowns = document.querySelectorAll(".topic-dropdown");
  const nav = document.querySelector("nav");
  console.log(nav);
  
  if (nav.contains(event.target)) return;

  dropDowns.forEach((dropDown) => {
    const uls = dropDown.querySelectorAll("ul");
    uls.forEach((ul) => {
      const listItems = ul.querySelectorAll("li");
      listItems.forEach((list) => {
        list.style.display = "none";
      });
    });
  });
});

function showList(ul_id, li_class) {
  const lists = document.querySelectorAll(li_class);
  const ul = document.getElementById(ul_id);

  lists.forEach((list) => {
    if (list.style.display === "none" || list.style.display === "") {
      list.style.display = "block";
      ul.style.position = "absolute";
      ul.style.top = "42%";
    } else {
      list.style.display = "none";
    }
  });
}
