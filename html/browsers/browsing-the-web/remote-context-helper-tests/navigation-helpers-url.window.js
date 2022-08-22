// META: title=RemoteContextHelper navigation helpers for retrieving and navigating to URLs
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/resources/testharness.js
// META: script=/resources/testharnessreport.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=./resources/test-helper.js

'use strict';

promise_test(async t => {
  const rcHelper = new RemoteContextHelper();
  const rc1 = await rcHelper.addWindow();
  await assertSimplestScriptRuns(rc1);

  const rc2 = await rc1.navigateToNew();
  await assertSimplestScriptRuns(rc2);

  rc2.navigateTo(rc1);
  await assertSimplestScriptRuns(rc1);

  rc1.navigateTo(rc2.url);
  await assertSimplestScriptRuns(rc2);
});
