import { classNames } from 'shared/lib/helpers/classNames';

describe('classNames', () => {
  test('with only parameter', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with additional class', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
      'someClass class1 class2'
    );
  });
  test('with many classes', () => {
    expect(
      classNames('someClass', { hovered: true, scrollable: true }, [
        'class1',
        'class2',
      ])
    ).toBe('someClass class1 class2 hovered scrollable');
  });

  test('with false classes', () => {
    expect(
      classNames('someClass', { hovered: true, scrollable: false }, [
        'class1',
        'class2',
      ])
    ).toBe('someClass class1 class2 hovered');
  });
});
