console.log('Hongbusi');

window.onload = function () {
  const footer = document.getElementsByClassName('footer')[0];
  const div = document.createElement('div');
  div.innerHTML = '<a href="https://beian.miit.gov.cn" target="_blank">浙ICP备2020035758号-2</a>'
  footer.appendChild(div);
}
