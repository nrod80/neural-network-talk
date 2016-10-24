//constructor function for a single neuron
const Neuron = function(numWeights) {
  this.weights = Array(numWeights);
}

//compute the results given an array of inputs
Neuron.prototype.compute = function(input) {
  if (input.length !== this.weights.length) {
    throw new Error('input and weight size does not match')
  }
  let result = input.reduce((total, val, idx) => total + val * this.weights[idx], 0);
  return Neuron.perceptron(result)
}

//set the weights for the current node
Neuron.prototype.setWeights = function(weights) {
  this.weights = weights;
}

//retrieve the weights of the current node
Neuron.prototype.getWeights = function() {
  return this.weights;
}

//the perceptron activation function
Neuron.perceptron = function(value) {
  if (value > 0) return 1;
  if (value <= 0) return 0;
}

//constructor function for a single layer
const Layer = function(nodes, inputSize) {
  this.nodes = [];
  for (let i = 0; i < nodes; i++) {
    this.nodes.push(new Neuron(inputSize))
  }
}

//compute the output of the layer given an array of inputs
Layer.prototype.compute = function(input) {
  const result = [];
  this.nodes.forEach((node) => {
    result.push(node.compute(input));
  })
  return result;
}

//retrieve the neurons for the current layer
Layer.prototype.getNeurons = function() {
  return this.nodes
}

//set the neurons for the current layer
Layer.prototype.setNeurons = function(nodeArray) {
  this.nodes = nodeArray;
}

//constructor for a full network
const Net = function(inputSize, hiddenLayerArray) {
  this.layers = hiddenLayerArray.map(function(layerSize, idx) {
    if (idx === 0) {
      return new Layer(layerSize, inputSize + 1)
    } else {
      return new Layer(layerSize, hiddenLayerArray[idx - 1] + 1)
    }
  })
}

//compute the output of the network given an array of inputs
Net.prototype.compute = function(input) {
  let currentResult = [];
  input.unshift(1);
  this.layers.forEach(function(layer, index) {
    if (index === 0) {
      currentResult = layer.compute(input);
    } else {
      currentResult.unshift(1)
      currentResult = layer.compute(currentResult)
    }
  })

  return currentResult
}

//retrieve the layers within the network
Net.prototype.getLayers = function() {
  return this.layers;
}

//set the neurons for each layer in the network
Net.prototype.setLayerNeurons = function(layerDefinition) {
  this.layers.forEach((layer, neuronArrayIdx) => layer.setNeurons(layerDefinition[neuronArrayIdx]))
}


module.exports = {
  Net,
  Layer,
  Neuron
}
