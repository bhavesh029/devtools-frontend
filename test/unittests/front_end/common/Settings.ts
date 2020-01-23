// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const {assert} = chai;

import {SettingsStorage} from '../../../../front_end/common/Settings.js';

describe('SettingsStorage class', () => {
  it('is able to be instantiated successfully', () => {
    const settingsStorage = new SettingsStorage({});
    assert.instanceOf(settingsStorage._object, Object, 'object type is not Object');
    assert.instanceOf(settingsStorage._setCallback, Function, 'setCallback type is not function');
    assert.instanceOf(settingsStorage._removeCallback, Function, 'removeCallback type is not function');
    assert.instanceOf(settingsStorage._removeAllCallback, Function, 'removeAllCallback type is not function');
    assert.equal(settingsStorage._storagePrefix, '', 'storagePrefix type is not an empty string');
  });

  it('is able to set a name', () => {
    const settingsStorage = new SettingsStorage({});
    settingsStorage.set('Test Name', 'Test Value');
    assert.equal(settingsStorage.get('Test Name'), 'Test Value', 'Name was not retrieve correctly');
  });

  it('is able to check if a name that it has exists', () => {
    const settingsStorage = new SettingsStorage({});
    settingsStorage.set('Test Name', 'Test Value');
    assert.isTrue(settingsStorage.has('Test Name'), 'the class should have that name');
  });

  it('is able to check if a name that it does not have exists', () => {
    const settingsStorage = new SettingsStorage({});
    assert.isFalse(settingsStorage.has('Test Name'), 'the class should not have that name');
  });

  it('is able to remove a name', () => {
    const settingsStorage = new SettingsStorage({});
    settingsStorage.set('Test Name', 'Test Value');
    settingsStorage.remove('Test Name');
    assert.isFalse(settingsStorage.has('Test Name'), 'the class should not have that name');
  });

  it('is able to remove all names', () => {
    const settingsStorage = new SettingsStorage({});
    settingsStorage.set('Test Name 1', 'Test Value 1');
    settingsStorage.set('Test Name 2', 'Test Value 2');
    settingsStorage.removeAll();
    assert.isFalse(settingsStorage.has('Test Name 1'), 'the class should not have any names');
    assert.isFalse(settingsStorage.has('Test Name 2'), 'the class should not have any names');
  });
});