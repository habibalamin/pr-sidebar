var prs = document.querySelectorAll('[id^="ref-pullrequest-"]');
var side = document.querySelector('#partial-discussion-sidebar');
var labels = document.querySelector('.sidebar-labels');
var prList = [];

for (var i = prs.length - 1; i >= 0; i--) {
  var anchor = prs[i].parentElement.querySelector('.discussion-item-ref-title a');
  var state = prs[i].parentElement.querySelector('.State');

  var aText = anchor.text.replace(/[\s]+/mg, ' ').replace(/^ | $/g, '');
  var aHref = anchor.href;
  var stateIcon = state.querySelector('svg').outerHTML;
  var stateName = state.textContent.trim();
  var stateColor = getComputedStyle(state).backgroundColor;
  prList.push('<li style="margin-bottom: 6px;"><a class="reason text-small text-muted" href="' + aHref + '">' + aText + '</a><span class="pr-state" style="color: ' + stateColor + '">' + stateIcon + '</span></li>');
}

var prOrderedList = document.createElement('ol');
prOrderedList.setAttribute('style', 'margin-left: 12px;');
prOrderedList.className = 'reason text-small text-muted';
prOrderedList.insertAdjacentHTML('afterbegin', prList.join(''));

var prListContainer = document.createElement('div');
prListContainer.className = 'discussion-sidebar-item sidebar-pull-requests';
prListContainer.insertAdjacentHTML('afterbegin', '<h4 class="discussion-sidebar-heading">Pull Requests</h4>');
prListContainer.insertAdjacentElement('beforeend', prOrderedList);

side.insertBefore(prListContainer, labels);
