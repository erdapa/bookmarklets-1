/*
*   lists.js: bookmarklet script for highlighting HTML list elements
*/

import Bookmarklet from './Bookmarklet';
import { listsCss } from './utils/dom';
import { getAccessibleName } from './utils/accname';
import { countChildrenWithTagNames } from './utils/utils.js';

(function () {
  let targetList = [
    {selector: "dl", color: "olive",  label: "dl"},
    {selector: "ol", color: "purple", label: "ol"},
    {selector: "ul", color: "navy",   label: "ul"}
  ];

  let selectors = targetList.map(function (tgt) {return tgt.selector;}).join(', ');

  function getInfo (element, target) {
    let accessibleName = getAccessibleName(element);

    let listType, listCount;
    switch (target.label) {
      case 'dl':
        listType = 'Definition list';
        listCount = countChildrenWithTagNames(element, ['DT', 'DD']);
        break;
      case 'ol':
        listType = 'Ordered list';
        listCount = countChildrenWithTagNames(element, ['LI']);
        break;
      case 'ul':
        listType = 'Unordered list';
        listCount = countChildrenWithTagNames(element, ['LI']);
        break;
    }

    let elemInfo = listType + ' with ' + listCount + ' items';

    let info = 'ELEMENT: ' + elemInfo;
    if (accessibleName) info += '\n' + 'ACC. NAME: ' + accessibleName;

    return info;
  }

  let params = {
    msgTitle:   "Lists",
    msgText:    "No list elements (" + selectors + ") found.",
    targetList: targetList,
    cssClass:   listsCss,
    getInfo:    getInfo,
    dndFlag:    true
  };

  let blt = new Bookmarklet("a11yLists", params);
  blt.run();
})();
