/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  java: {
    Pure: [
      'Java/Pure/java-overview',
      {
        type: 'category',
        label: '基本',
        items: [
          'Java/Pure/Basic/java-print',
          'Java/Pure/Basic/java-if',
          'Java/Pure/Basic/java-loop'
        ],
      },
    ]
  },
  php: {
    Pure: [
      'PHP/Pure/php-overview',
      'PHP/Pure/php-syntax',
      'PHP/Pure/php-class',
      {
        type: 'category',
        label: '基本',
        items: [
          'PHP/Pure/Basic/php-print',
          'PHP/Pure/Basic/php-if',
          'PHP/Pure/Basic/php-loop'
        ],
      },
      {
        type: 'category',
        label: '配列',
        items: [
          'PHP/Pure/Array/php-array-basic'
        ],
      },
    ]
  }
};