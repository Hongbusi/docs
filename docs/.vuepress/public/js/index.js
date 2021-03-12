console.log('Hongbusi');

window.onload = function () {
  const footer = document.getElementsByClassName('footer')[0];
  const p = document.createElement('p');
  p.innerHTML = '<a href="https://beian.miit.gov.cn" target="_blank">浙ICP备2020035758号-2</a>'
  footer.appendChild(p);
}
