const Net = require('./NeuralNet').Net;
const Neuron = require('./NeuralNet').Neuron;

const nand = new Neuron(3);
nand.setWeights([3, -2, -2]);

const or = new Neuron(3);
or.setWeights([-1, 2, 2]);

const and = new Neuron(3);
and.setWeights([-3, 2, 2]);

const not = new Neuron(3);
not.setWeights([1, -2, -2]);

console.log('\n\n<<<<<<NAND Neuron>>>>>>\n');
console.log(nand.compute([1, 0, 0]));
console.log(nand.compute([1, 1, 0]));
console.log(nand.compute([1, 0, 1]));
console.log(nand.compute([1, 1, 1]));

console.log('\n\n<<<<<<OR Neuron>>>>>>\n');
console.log(or.compute([1, 0, 0]));
console.log(or.compute([1, 1, 0]));
console.log(or.compute([1, 0, 1]));
console.log(or.compute([1, 1, 1]));

console.log('\n\n<<<<<<AND Neuron>>>>>>\n');
console.log(and.compute([1, 0, 0]));
console.log(and.compute([1, 1, 0]));
console.log(and.compute([1, 0, 1]));
console.log(and.compute([1, 1, 1]));

console.log('\n\n<<<<<<NOT Neuron>>>>>>\n');
console.log(not.compute([1, 0, 0]));
console.log(not.compute([1, 1, 0]));
console.log(not.compute([1, 0, 1]));
console.log(not.compute([1, 1, 1]));

const xorNet = new Net(2, [2, 1]);
xorNet.setLayerNeurons([[nand, or], [and]]);
console.log('\n\n<<<<<<xorNet>>>>>>\n');
console.log(xorNet.compute([0, 0]));
console.log(xorNet.compute([0, 1]));
console.log(xorNet.compute([1, 0]));
console.log(xorNet.compute([1, 1]));

const xorNet2 = new Net(2, [2, 1]);
xorNet2.setLayerNeurons([[and, not], [not]]);
console.log('\n\n<<<<<<xorNet2>>>>>>\n');
console.log(xorNet.compute([0, 0]));
console.log(xorNet.compute([0, 1]));
console.log(xorNet.compute([1, 0]));
console.log(xorNet.compute([1, 1]));
