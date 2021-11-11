/*
 * This file is part of OrangeHRM Inc
 *
 * Copyright (C) 2020 onwards OrangeHRM Inc
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see  http://www.gnu.org/licenses
 */

import {mount} from '@vue/test-utils';
import TableHeaderCell from '@ohrm/oxd/core/components/CardTable/Table/TableHeaderCell.vue';

describe('CardTable > TableHeaderCell.vue', () => {
  it('renders OXD CardTable > TableHeaderCell', () => {
    const wrapper = mount(TableHeaderCell, {
      props: {},
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
