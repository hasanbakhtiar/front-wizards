const list: any = document.querySelector("li") as HTMLLIElement;
const allList: any = document.querySelector("ul") as HTMLUListElement;
const headText: any = document.querySelector<HTMLHeadElement>("h1");
list.innerHTML = "new data";
allList.style.color = "red";
