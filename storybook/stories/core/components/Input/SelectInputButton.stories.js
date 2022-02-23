import SelectInputButton from '@orangehrm/oxd/core/components/Input/Select/SelectInputButton';
import {
  BOTTOM,
  DROPDOWN_POSITIONS,
} from '@orangehrm/oxd/core/components/Input/types';
import {h, ref} from 'vue';

export default {
  title: 'Example/SelectInputButton',
  component: SelectInputButton,
  argTypes: {
    style: {control: {type: 'object'}},
    hasError: {control: {type: 'boolean'}},
    dropdownPosition: {
      options: DROPDOWN_POSITIONS,
      defaultValue: BOTTOM,
    },
    options: {
      control: {type: 'array'},
      defaultValue: [],
    },
    button: {control: {type: 'object'}}
  },
};

const options = [
  {
    id: 1,
    label: 'HR Admin',
  },
  {
    id: 2,
    label: 'ESS User',
  },
  {
    id: 3,
    label: 'Supervisor',
  },
  {
    id: 4,
    label: 'Manager',
  },
  {
    id: 5,
    label: 'Employee',
  },
  {
    id: 6,
    label: 'Assistant Manager',
  },
  {
    id: 7,
    label: 'Director',
  },
  {
    id: 8,
    label: 'Officer',
  },
  {
    id: 9,
    label: 'Appraiser',
  },
  {
    id: 10,
    label: 'Senior Executive',
  },
];

const buttonObject = {
  label: 'All User Roles',
  labelMini: null,
  iconName: 'plus',
  iconSize: 'small',
  iconImageSrc: null,
  size: 'long',
  displayType: 'label',
  style: null,
  doubleLineLabel: true,
  showLabel: true,
  labelMini: 'User Role'
}

const Template = args => ({
  setup() {
    const selected = ref(null);
    return {args, selected};
  },
  render() {
    return h(SelectInputButton, {
      ...this.args,
      modelValue: this.selected,
      'onUpdate:modelValue': value => {
        this.selected = value;
      },
    });
  },
});

export const Default = Template.bind({});
Default.args = {
  options: options,
  button: buttonObject,
};

export const Error = Template.bind({});
Error.args = {
  hasError: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: options,
  disabled: true,
};

export const Readonly = Template.bind({});
Readonly.args = {
  options: options,
  readonly: true,
};

export const LongLabels = Template.bind({});
LongLabels.args = {
  options: [
    {id: 1, label: 'This is a very long label for testing the dropdown field'},
    {
      id: 2,
      label:
        'aaaaaaaaaaa bbbbbbbbbbbbbbbbbbbbbbbbbbb cccccccccccccccccccccc ddddddddddddddddddddddddddddd',
    },
    {id: 3, label: 'normal length label'},
    {id: 4, label: null},
    {id: 5, label: 'ඔක්තෝබර්'},
  ],
};
