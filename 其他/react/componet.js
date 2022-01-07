function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = {};
  // 初始化 updater，真正的 updater 由渲染器注入。
  this.updater = updater;
}
// React组件标识
Component.prototype.isReactComponent = {}; 


function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = {};
  this.updater = updater;
}
// 继承自Component
const pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
Object.assign(pureComponentPrototype, Component.prototype);
// PureComponent 标识
pureComponentPrototype.isPureReactComponent = true;


const a = new PureComponent()

console.log('a', a) // lq-log

