export type Difficulty = 'Beginner' | 'Foundation' | 'Intermediate' | 'Production'

export type QuizQuestion = {
  question: string
  options: string[]
  answer: number
  explanation: string
}

export type Formula = {
  name: string
  expression: string
  breakdown: string[]
  derivation: string[]
}

export type Lesson = {
  id: string
  module: string
  title: string
  difficulty: Difficulty
  duration: string
  sourceFocus: string[]
  whyItMatters: string
  dumbExplanation: string
  developerExplanation: string
  jargon: { term: string; meaning: string; useCase: string }[]
  algorithm?: { name: string; intuition: string; steps: string[]; pseudocode: string[] }
  formulas?: Formula[]
  approaches: { name: string; whenToUse: string; tradeoff: string }[]
  commonMistakes: { mistake: string; avoid: string }[]
  workedExample: { problem: string; approach: string; why: string; steps: string[] }
  practice: { level: 'Easy' | 'Medium' | 'Hard'; prompt: string; hint: string }[]
  quiz: QuizQuestion[]
  references: { label: string; url: string }[]
}

export const learningPath = [
  'Map the territory: AI vs ML vs Deep Learning vs LLMs',
  'Learn prediction with supervised learning',
  'Understand loss, optimization, and gradient descent',
  'Build intuition for neural networks and backpropagation',
  'Understand tokens, embeddings, attention, and transformers',
  'Build LLM apps with prompting, RAG, tools, agents, and MCP',
  'Ship production systems with evaluation, DevOps, architecture, safety, and cost control',
]

export const expertOutcomes = [
  'Explain every major AI/ML/LLM concept in plain language and in implementation-ready developer language.',
  'Derive and implement core algorithms such as linear regression, gradient descent, backpropagation, attention, retrieval, and evaluation loops.',
  'Choose the right approach for a problem: rules, classical ML, deep learning, RAG, fine-tuning, tool calling, agents, or graph workflows.',
  'Build end-to-end projects: train models, evaluate them, expose APIs, build LLM apps, add retrieval/tools, and deploy with monitoring.',
  'Debug common failure modes: overfitting, data leakage, hallucination, bad retrieval, prompt brittleness, high latency, high cost, and unsafe tool use.',
  'Read research/docs confidently because all jargon, formulas, and system-design ideas have been progressively unpacked.',
]

export const masteryLevels = [
  {
    level: 'Level 1 — Beginner literacy',
    proof: 'You can define concepts, identify problem types, and explain them to a non-technical person.',
  },
  {
    level: 'Level 2 — Mathematical intuition',
    proof: 'You can break down formulas symbol-by-symbol and explain why each equation exists.',
  },
  {
    level: 'Level 3 — Implementation readiness',
    proof: 'You can implement core algorithms from scratch or with libraries and know what each line is doing.',
  },
  {
    level: 'Level 4 — System builder',
    proof: 'You can combine models, retrieval, tools, agents, APIs, storage, tests, and monitoring into working products.',
  },
  {
    level: 'Level 5 — Expert judgment',
    proof: 'You can compare approaches, predict failure modes, design evals, optimize cost/performance, and defend architecture choices.',
  },
]

export const capstoneProjects = [
  {
    title: 'From-scratch ML lab',
    goal: 'Implement linear regression, logistic regression, gradient descent, metrics, and train/test splitting without high-level ML libraries.',
    skills: ['math intuition', 'algorithm implementation', 'debugging', 'evaluation'],
  },
  {
    title: 'Deep learning notebook series',
    goal: 'Build neural networks, explain backpropagation, run experiments, and analyze overfitting/regularization.',
    skills: ['PyTorch/TensorFlow readiness', 'loss curves', 'regularization', 'model comparison'],
  },
  {
    title: 'RAG tutor over your Learning repo',
    goal: 'Index your own books/docs, retrieve relevant chunks, answer with citations, and test hallucination cases.',
    skills: ['embeddings', 'chunking', 'vector search', 'prompting', 'evals'],
  },
  {
    title: 'Agent workflow builder',
    goal: 'Create a graph-based research/coding assistant with tools, state, retries, permissions, and stopping rules.',
    skills: ['LangGraph', 'Semantic Kernel concepts', 'MCP', 'tool calling', 'agent safety'],
  },
  {
    title: 'Production AI system design',
    goal: 'Design and document a production AI platform with APIs, queues, observability, eval gates, cost budgets, security, and deployment plan.',
    skills: ['system design', 'AWS Well-Architected', 'DevOps', 'monitoring', 'cost optimization'],
  },
]

export const domainCoverage = [
  { area: 'Math foundations', status: 'Planned expansion', topics: ['linear algebra', 'calculus', 'probability', 'statistics', 'optimization'] },
  { area: 'Classical machine learning', status: 'Partially seeded', topics: ['regression', 'classification', 'trees', 'ensembles', 'SVMs', 'clustering', 'metrics'] },
  { area: 'Deep learning', status: 'Partially seeded', topics: ['neural networks', 'backpropagation', 'CNNs', 'RNNs', 'transformers', 'regularization'] },
  { area: 'LLM internals', status: 'Partially seeded', topics: ['tokens', 'embeddings', 'attention', 'transformers', 'decoding', 'alignment'] },
  { area: 'LLM application engineering', status: 'Partially seeded', topics: ['prompting', 'structured outputs', 'RAG', 'tool calling', 'agents', 'MCP', 'LangGraph', 'Semantic Kernel'] },
  { area: 'MLOps and production AI', status: 'Partially seeded', topics: ['data pipelines', 'model registry', 'evals', 'monitoring', 'deployment', 'cost', 'safety'] },
  { area: 'System design for AI products', status: 'Partially seeded', topics: ['scaling', 'queues', 'caching', 'vector databases', 'observability', 'AWS well-architected pillars'] },
  { area: 'FAANG interview readiness', status: 'Needs dedicated track', topics: ['DSA', 'ML fundamentals', 'ML system design', 'LLM system design', 'behavioral stories', 'coding rounds'] },
]

export const faangReadinessTrack = [
  {
    round: 'Coding / DSA rounds',
    requirement: 'You must separately master arrays, strings, hashing, two pointers, sliding window, stacks, queues, linked lists, trees, graphs, heaps, dynamic programming, recursion, binary search, sorting, and complexity analysis.',
    platformSupport: 'To add: daily DSA practice track with explanations and timed interview mode.',
  },
  {
    round: 'ML fundamentals rounds',
    requirement: 'You must explain bias/variance, metrics, feature engineering, regularization, optimization, model selection, trees/boosting, neural networks, and error analysis clearly.',
    platformSupport: 'Current lessons begin this; needs many more concept drills and math derivations.',
  },
  {
    round: 'ML system design rounds',
    requirement: 'You must design recommendation, ranking, ads, search, fraud, forecasting, experimentation, training/serving, monitoring, and data pipelines.',
    platformSupport: 'To add: full ML system design casebook with diagrams, tradeoffs, and mock interviews.',
  },
  {
    round: 'LLM / GenAI system design rounds',
    requirement: 'You must design RAG, agent, eval, guardrail, prompt, vector DB, model gateway, cost-control, and safety architectures.',
    platformSupport: 'Current lessons begin this; needs case studies and architecture challenges.',
  },
  {
    round: 'Behavioral / leadership rounds',
    requirement: 'You need structured stories showing ownership, conflict resolution, ambiguity, technical depth, impact, and learning ability.',
    platformSupport: 'To add: STAR story builder and mock behavioral question bank.',
  },
]

export const honestMasteryPromise = {
  current: 'The MVP does not yet cover the entire AI/ML/LLM domain or guarantee FAANG readiness. It is the foundation and interface for building that system.',
  target: 'After the full curriculum, exercises, projects, mock interviews, and capstone reviews are built and completed seriously, the platform should prepare you strongly for AI/ML/LLM engineering interviews, including many FAANG-style rounds.',
  warning: 'No platform can make interviews effortless without deliberate practice. Expertise requires solving problems, writing code, debugging, building projects, explaining tradeoffs, and repeating mock interviews under time pressure.',
}

export const curriculum: Lesson[] = [
  {
    id: 'ai-map',
    module: 'Foundations',
    title: 'AI, ML, Deep Learning, and LLMs: the complete map',
    difficulty: 'Beginner',
    duration: '45 min',
    sourceFocus: ['Made With ML', 'Hands-On ML', 'Deep Learning Book', 'OpenAI docs', 'Anthropic docs'],
    whyItMatters: 'If you cannot name the kind of problem you are solving, you will choose the wrong tool. This lesson gives you the map before the journey.',
    dumbExplanation: 'AI is the big dream: make computers do tasks that feel smart. Machine Learning is one way to do that: instead of writing every rule by hand, you show examples and the computer learns a pattern. Deep Learning is ML using many-layered neural networks. LLMs are deep learning models trained on huge amounts of text so they can predict and generate language.',
    developerExplanation: 'AI is the umbrella. ML is statistical pattern learning from data. Deep learning is representation learning with neural networks. LLMs are transformer-based sequence models trained with self-supervised next-token prediction and often aligned with instruction tuning/RLHF. In software terms: you replace hand-coded decision logic with a model artifact trained from data, then wrap it in evaluation, APIs, monitoring, and product logic.',
    jargon: [
      { term: 'Model', meaning: 'A learned function that maps input to output.', useCase: 'Predict house price from features or generate an answer from a prompt.' },
      { term: 'Training', meaning: 'The process of adjusting a model using examples.', useCase: 'Teach a classifier with labeled images.' },
      { term: 'Inference', meaning: 'Using a trained model to make a prediction or generate output.', useCase: 'Calling an LLM API in your app.' },
      { term: 'Feature', meaning: 'A useful input signal for a model.', useCase: 'Square footage, location, and bedrooms for house price prediction.' },
      { term: 'Label', meaning: 'The target answer in supervised learning.', useCase: 'The actual house price.' },
      { term: 'Token', meaning: 'A chunk of text used by an LLM, often a word piece.', useCase: 'LLMs read and write tokens, not raw paragraphs.' },
    ],
    approaches: [
      { name: 'Rule-based programming', whenToUse: 'Rules are stable, simple, and legally/auditably defined.', tradeoff: 'Clear and controllable, but brittle for fuzzy tasks.' },
      { name: 'Classical ML', whenToUse: 'Structured data with measurable features.', tradeoff: 'Efficient and interpretable, but needs feature engineering.' },
      { name: 'Deep learning', whenToUse: 'Images, audio, text, or complex patterns with enough data.', tradeoff: 'Powerful but data/compute hungry.' },
      { name: 'LLM API/application', whenToUse: 'Language reasoning, summarization, extraction, agents, coding help.', tradeoff: 'Fast to build, but needs evaluation, guardrails, and cost control.' },
    ],
    commonMistakes: [
      { mistake: 'Starting with the fanciest model.', avoid: 'Start with the simplest baseline that can solve the problem; complexity must earn its place.' },
      { mistake: 'Confusing demo quality with production quality.', avoid: 'Create test cases, track failures, measure latency/cost, and monitor behavior.' },
      { mistake: 'Not defining success.', avoid: 'Write the metric first: accuracy, F1, helpfulness score, latency, or dollars per task.' },
    ],
    workedExample: {
      problem: 'You want an app that answers questions from your PDF notes.',
      approach: 'Use RAG before fine-tuning.',
      why: 'The knowledge already exists in documents. RAG retrieves relevant chunks at answer time; fine-tuning is more expensive and does not reliably memorize exact facts.',
      steps: ['Load PDFs', 'Split text into chunks', 'Embed chunks', 'Store vectors', 'Retrieve top chunks for a question', 'Ask the LLM to answer using only those chunks', 'Evaluate answers against known questions'],
    },
    practice: [
      { level: 'Easy', prompt: 'Classify these as AI, ML, Deep Learning, or LLM app: spam filter, ChatGPT wrapper, face detector, if/else tax calculator.', hint: 'Ask whether it learns from data and whether it uses neural networks/text generation.' },
      { level: 'Medium', prompt: 'For a rain prediction app, define features, label, model output, and success metric.', hint: 'Use weather columns as features and rain tomorrow as label.' },
      { level: 'Hard', prompt: 'Design a study assistant that uses both rules and LLMs. What should be deterministic?', hint: 'Authentication, billing, and permissions should usually be rules; explanation generation can use LLMs.' },
    ],
    quiz: [
      { question: 'What is inference?', options: ['Collecting data', 'Using a trained model to produce output', 'Deleting bad rows', 'Writing CSS'], answer: 1, explanation: 'Training creates the model; inference uses it.' },
      { question: 'Why start with a simple baseline?', options: ['It is always more accurate', 'It gives a comparison point and avoids unnecessary complexity', 'It needs no data', 'It replaces evaluation'], answer: 1, explanation: 'A baseline tells you if added complexity is actually helping.' },
    ],
    references: [
      { label: 'Made With ML', url: 'https://madewithml.com/' },
      { label: 'Hands-On ML 3', url: 'https://github.com/ageron/handson-ml3' },
      { label: 'Deep Learning Book', url: 'https://www.deeplearningbook.org/' },
    ],
  },
  {
    id: 'linear-regression',
    module: 'Machine Learning',
    title: 'Supervised learning and linear regression',
    difficulty: 'Foundation',
    duration: '70 min',
    sourceFocus: ['Hands-On ML', 'Made With ML', 'Deep Learning Book'],
    whyItMatters: 'Linear regression is the hello-world of prediction and the doorway to loss functions, gradients, and model evaluation.',
    dumbExplanation: 'Imagine drawing the best straight line through dots on a graph. If the dot is house size and price, the line lets you guess the price of a new house. The model is just slope and starting point.',
    developerExplanation: 'Linear regression models a target y as a weighted sum of input features: y_hat = w·x + b. Training chooses weights that minimize prediction error, commonly mean squared error. It is simple, fast, interpretable, and a strong baseline for continuous prediction problems.',
    jargon: [
      { term: 'Supervised learning', meaning: 'Learning from examples that include the correct answer.', useCase: 'Input: house facts. Label: actual price.' },
      { term: 'Regression', meaning: 'Predicting a continuous number.', useCase: 'Price, temperature, demand.' },
      { term: 'Weight', meaning: 'A learned multiplier showing how strongly a feature affects prediction.', useCase: 'Extra bedrooms may increase predicted price.' },
      { term: 'Bias/intercept', meaning: 'The model output when feature values are zero.', useCase: 'Starting point of the prediction line.' },
      { term: 'Residual', meaning: 'Prediction error for one example: actual minus predicted.', useCase: 'If actual is 300k and predicted is 280k, residual is 20k.' },
    ],
    algorithm: {
      name: 'Linear regression training with gradient descent',
      intuition: 'Start with a random line, measure how wrong it is, nudge slope/intercept in the direction that reduces error, repeat.',
      steps: ['Initialize weights and bias', 'Predict y_hat for every row', 'Compute loss', 'Compute gradients of loss with respect to weights', 'Update weights opposite the gradient', 'Repeat until loss stops improving'],
      pseudocode: ['w, b = small random values', 'for epoch in range(num_epochs):', '  y_hat = X @ w + b', '  loss = mean((y_hat - y)^2)', '  grad_w = (2/n) * X.T @ (y_hat - y)', '  grad_b = (2/n) * sum(y_hat - y)', '  w = w - learning_rate * grad_w', '  b = b - learning_rate * grad_b'],
    },
    formulas: [
      {
        name: 'Linear prediction',
        expression: 'ŷ = w₁x₁ + w₂x₂ + ... + wₙxₙ + b',
        breakdown: ['ŷ is the prediction.', 'x values are input features.', 'w values are learned importance multipliers.', 'b is the baseline offset.'],
        derivation: ['Assume each feature contributes additively.', 'Give every feature a multiplier.', 'Add a constant so the line/plane can shift up or down.'],
      },
      {
        name: 'Mean Squared Error',
        expression: 'MSE = (1/m) Σ(ŷᵢ - yᵢ)²',
        breakdown: ['m is number of examples.', 'ŷᵢ - yᵢ is prediction error.', 'Squaring makes negative and positive errors both count and punishes big errors.', 'Averaging gives one comparable score.'],
        derivation: ['We need a single number for wrongness.', 'Sum errors is bad because positives and negatives cancel.', 'Absolute value works but is less smooth.', 'Square error is smooth, so calculus can optimize it.'],
      },
    ],
    approaches: [
      { name: 'Closed-form normal equation', whenToUse: 'Small/medium data with not too many features.', tradeoff: 'Exact solution but expensive matrix operations for huge feature sets.' },
      { name: 'Batch gradient descent', whenToUse: 'Learning optimization concepts or medium data.', tradeoff: 'Stable but each step uses all data.' },
      { name: 'Stochastic/mini-batch gradient descent', whenToUse: 'Large datasets and neural networks.', tradeoff: 'Faster steps but noisier path.' },
      { name: 'Regularized regression', whenToUse: 'Many features or overfitting risk.', tradeoff: 'Adds bias to reduce variance.' },
    ],
    commonMistakes: [
      { mistake: 'Training and testing on the same data.', avoid: 'Split train/validation/test so evaluation simulates unseen data.' },
      { mistake: 'Ignoring feature scale.', avoid: 'Standardize features before gradient descent when ranges differ.' },
      { mistake: 'Assuming correlation means causation.', avoid: 'Regression can predict without proving one variable causes another.' },
    ],
    workedExample: {
      problem: 'Predict house price from size only.',
      approach: 'Use one-feature linear regression.',
      why: 'A scatter plot often shows price increasing with size; a line is an interpretable baseline.',
      steps: ['Plot size vs price', 'Split data', 'Fit price = w * size + b', 'Compute MSE on validation data', 'Inspect residuals for patterns', 'If residuals curve, try polynomial features or tree models'],
    },
    practice: [
      { level: 'Easy', prompt: 'If ŷ = 2x + 5 and x = 10, what is ŷ?', hint: 'Multiply first, then add bias.' },
      { level: 'Medium', prompt: 'Given predictions [3, 5] and actuals [4, 1], compute MSE.', hint: 'Errors are -1 and 4; square and average.' },
      { level: 'Hard', prompt: 'Explain why a very high learning rate can make training worse.', hint: 'The update can jump over the minimum instead of approaching it.' },
    ],
    quiz: [
      { question: 'What does MSE punish strongly?', options: ['Small errors only', 'Large errors', 'Feature names', 'Fast models'], answer: 1, explanation: 'Squaring makes large errors much larger.' },
      { question: 'What is the bias term?', options: ['Unfair data', 'The constant offset in the model', 'The target label', 'A validation split'], answer: 1, explanation: 'In linear models, bias/intercept shifts predictions up or down.' },
    ],
    references: [
      { label: 'Hands-On ML 3', url: 'https://github.com/ageron/handson-ml3' },
      { label: 'Made With ML', url: 'https://madewithml.com/' },
    ],
  },
  {
    id: 'gradient-descent',
    module: 'Optimization',
    title: 'Loss functions and gradient descent',
    difficulty: 'Foundation',
    duration: '80 min',
    sourceFocus: ['Deep Learning Book', 'Hands-On ML'],
    whyItMatters: 'Most ML training is optimization: define wrongness, then reduce it.',
    dumbExplanation: 'Imagine standing on a foggy hill and wanting to reach the lowest point. You feel which way slopes downward under your feet, take a small step, and repeat. The hill is loss; your step direction is the gradient.',
    developerExplanation: 'A loss function maps model parameters to an error value. Gradient descent computes partial derivatives of the loss with respect to parameters and updates parameters in the negative-gradient direction. Learning rate controls step size.',
    jargon: [
      { term: 'Loss function', meaning: 'A formula that measures how wrong the model is.', useCase: 'MSE for regression, cross-entropy for classification.' },
      { term: 'Gradient', meaning: 'A vector of slopes showing which direction increases loss fastest.', useCase: 'Move opposite it to reduce loss.' },
      { term: 'Learning rate', meaning: 'The size of each optimization step.', useCase: '0.001 for many neural networks.' },
      { term: 'Epoch', meaning: 'One full pass through training data.', useCase: 'Train for 10 epochs.' },
      { term: 'Local minimum', meaning: 'A point lower than nearby points, but not necessarily the best overall.', useCase: 'Neural nets may settle in one.' },
    ],
    algorithm: {
      name: 'Gradient descent',
      intuition: 'Repeatedly move parameters in the direction that most reduces the loss.',
      steps: ['Pick starting parameters', 'Compute predictions', 'Compute loss', 'Compute gradient', 'Update parameters: parameter = parameter - learning_rate × gradient', 'Stop when improvement is tiny or validation gets worse'],
      pseudocode: ['params = initialize()', 'while not converged:', '  loss = compute_loss(model(params), data)', '  grads = derivative(loss, params)', '  params = params - lr * grads'],
    },
    formulas: [
      {
        name: 'Gradient descent update',
        expression: 'θ_new = θ_old - α ∇J(θ)',
        breakdown: ['θ means parameters.', 'α is learning rate.', 'J(θ) is loss as a function of parameters.', '∇J(θ) is the gradient vector.', 'Minus means move downhill.'],
        derivation: ['Derivative tells how loss changes if a parameter increases slightly.', 'Positive derivative means increasing parameter increases loss, so decrease it.', 'Negative derivative means increasing parameter decreases loss, so increase it.', 'Both cases are handled by subtracting α times derivative.'],
      },
    ],
    approaches: [
      { name: 'Batch gradient descent', whenToUse: 'Small datasets or teaching.', tradeoff: 'Accurate gradient, slower updates.' },
      { name: 'Mini-batch SGD', whenToUse: 'Deep learning default.', tradeoff: 'Efficient and noisy in a helpful way.' },
      { name: 'Adam optimizer', whenToUse: 'Most neural network training starts here.', tradeoff: 'Adaptive and fast, but can generalize differently from SGD.' },
    ],
    commonMistakes: [
      { mistake: 'Learning rate too high.', avoid: 'Watch loss; if it explodes or oscillates, lower the rate.' },
      { mistake: 'Learning rate too low.', avoid: 'If loss barely changes, raise rate or use Adam.' },
      { mistake: 'Only checking training loss.', avoid: 'Track validation loss to detect overfitting.' },
    ],
    workedExample: {
      problem: 'Minimize J(w) = (w - 3)^2.',
      approach: 'Use derivative dJ/dw = 2(w - 3).',
      why: 'This simple bowl shows the full idea without messy data.',
      steps: ['Start w = 0', 'Gradient = 2(0-3) = -6', 'With α=0.1, w_new = 0 - 0.1(-6) = 0.6', 'Repeat: w moves toward 3', 'At w=3, gradient is 0, so training stops'],
    },
    practice: [
      { level: 'Easy', prompt: 'For J(w)=(w-5)^2, where is the minimum?', hint: 'The squared term is zero when w=5.' },
      { level: 'Medium', prompt: 'If gradient is 4 and learning rate is 0.1, how does θ change?', hint: 'Subtract 0.4.' },
      { level: 'Hard', prompt: 'Describe how you would debug training loss becoming NaN.', hint: 'Check learning rate, input scaling, invalid values, exploding gradients.' },
    ],
    quiz: [
      { question: 'Why subtract the gradient?', options: ['To move uphill', 'To move downhill and reduce loss', 'To increase parameters always', 'To remove data'], answer: 1, explanation: 'The gradient points uphill; negative gradient points downhill.' },
    ],
    references: [{ label: 'Deep Learning Book', url: 'https://www.deeplearningbook.org/' }],
  },
  {
    id: 'neural-networks',
    module: 'Deep Learning',
    title: 'Neural networks and backpropagation',
    difficulty: 'Intermediate',
    duration: '95 min',
    sourceFocus: ['Deep Learning Book', 'Hands-On ML'],
    whyItMatters: 'Neural networks power modern vision, speech, recommendation, and language systems.',
    dumbExplanation: 'A neural network is a stack of simple calculators. Each calculator looks at numbers, weights them, adds them, applies a squashing rule, and passes the result forward. Backpropagation is the blame system: it tells each weight how much it contributed to the mistake.',
    developerExplanation: 'A neural network composes affine transformations and nonlinear activations. Forward pass computes predictions. Backpropagation applies the chain rule to compute gradients of loss with respect to every parameter, enabling gradient-based optimization.',
    jargon: [
      { term: 'Neuron/unit', meaning: 'A small computation: weighted sum plus activation.', useCase: 'Hidden units learn intermediate patterns.' },
      { term: 'Activation function', meaning: 'A nonlinear function applied after a weighted sum.', useCase: 'ReLU lets networks model nonlinear relationships.' },
      { term: 'Layer', meaning: 'A group of units operating at the same stage.', useCase: 'Input, hidden, output layers.' },
      { term: 'Backpropagation', meaning: 'Efficient gradient computation through layers using the chain rule.', useCase: 'Train deep networks.' },
      { term: 'Overfitting', meaning: 'Doing well on training data but poorly on new data.', useCase: 'A model memorizes examples instead of learning patterns.' },
    ],
    algorithm: {
      name: 'Backpropagation',
      intuition: 'First make a prediction, then send the error backward to assign blame to every weight.',
      steps: ['Forward pass through layers', 'Compute loss', 'Compute output-layer gradient', 'Move backward layer by layer using chain rule', 'Store gradients for every weight', 'Optimizer updates weights'],
      pseudocode: ['activations = forward(x)', 'loss = L(activations[-1], y)', 'grad = dL/dOutput', 'for layer in reversed(layers):', '  grad_w, grad_b, grad = layer.backward(grad)', 'optimizer.step(params, grads)'],
    },
    formulas: [
      { name: 'One neuron', expression: 'a = σ(w·x + b)', breakdown: ['x is input vector.', 'w·x is weighted sum.', 'b shifts the result.', 'σ adds nonlinearity.', 'a is activation output.'], derivation: ['Linear combination summarizes inputs.', 'Bias gives flexibility.', 'Without σ, many layers collapse into one linear model.', 'Nonlinearity creates expressive power.'] },
      { name: 'Chain rule idea', expression: 'dL/dw = dL/da × da/dz × dz/dw', breakdown: ['L is loss.', 'a is activation.', 'z is pre-activation weighted sum.', 'w is weight.', 'Multiply local effects to get total effect.'], derivation: ['w changes z.', 'z changes a.', 'a changes L.', 'So w changes L through the product of these links.'] },
    ],
    approaches: [
      { name: 'MLP', whenToUse: 'Tabular data or simple dense features.', tradeoff: 'Easy but not best for images/text structure.' },
      { name: 'CNN', whenToUse: 'Images and spatial patterns.', tradeoff: 'Uses locality; less general than transformers for sequences.' },
      { name: 'Transformer', whenToUse: 'Language and many sequence/multimodal tasks.', tradeoff: 'Powerful but compute-intensive.' },
    ],
    commonMistakes: [
      { mistake: 'Forgetting nonlinear activations.', avoid: 'Use ReLU/GELU/tanh between linear layers.' },
      { mistake: 'Too large a network for tiny data.', avoid: 'Use regularization, simpler models, or more data.' },
      { mistake: 'Not normalizing inputs.', avoid: 'Scale inputs so optimization behaves well.' },
    ],
    workedExample: { problem: 'Classify handwritten digits.', approach: 'Use a neural net or CNN.', why: 'Pixels have nonlinear patterns; edges combine into shapes and shapes into digits.', steps: ['Normalize pixels', 'Choose train/validation split', 'Build layers', 'Train with cross-entropy', 'Check confusion matrix', 'Inspect wrong predictions'] },
    practice: [
      { level: 'Easy', prompt: 'Why does a neural network need activation functions?', hint: 'Without them, stacked linear layers are still linear.' },
      { level: 'Medium', prompt: 'Explain backpropagation using blame assignment.', hint: 'Output error is distributed backward through connections.' },
      { level: 'Hard', prompt: 'Design experiments to reduce overfitting.', hint: 'Try more data, dropout, weight decay, smaller model, early stopping.' },
    ],
    quiz: [{ question: 'Backpropagation is mainly used to compute what?', options: ['HTML', 'Gradients', 'API keys', 'Tokens'], answer: 1, explanation: 'Backprop efficiently computes gradients for every parameter.' }],
    references: [{ label: 'Deep Learning Book', url: 'https://www.deeplearningbook.org/' }],
  },
  {
    id: 'llm-internals',
    module: 'LLMs',
    title: 'Tokens, embeddings, attention, and transformers',
    difficulty: 'Intermediate',
    duration: '100 min',
    sourceFocus: ['OpenAI docs', 'Anthropic docs', 'Deep Learning Book'],
    whyItMatters: 'To use LLMs well, you need to know what they actually see and optimize: tokens, vectors, probabilities, and context.',
    dumbExplanation: 'An LLM reads text after chopping it into pieces called tokens. Each token becomes a list of numbers called an embedding. Attention lets every word look at other words to understand context. The model repeatedly guesses the next token.',
    developerExplanation: 'Transformer LLMs tokenize input, map tokens to embeddings, apply stacked self-attention and feed-forward layers, and output a probability distribution over the vocabulary for the next token. Generation samples/decodes from that distribution repeatedly.',
    jargon: [
      { term: 'Vocabulary', meaning: 'The set of tokens the model knows.', useCase: 'Output probabilities are over vocabulary entries.' },
      { term: 'Embedding', meaning: 'A dense numeric vector representing meaning/usage.', useCase: 'Search similar documents or feed tokens to transformer layers.' },
      { term: 'Attention', meaning: 'A mechanism that lets tokens weigh information from other tokens.', useCase: 'Connect pronouns to nouns or instructions to outputs.' },
      { term: 'Context window', meaning: 'Maximum tokens the model can consider at once.', useCase: 'Long docs may need chunking or summarization.' },
      { term: 'Temperature', meaning: 'A decoding setting controlling randomness.', useCase: 'Low for factual tasks, higher for brainstorming.' },
    ],
    algorithm: { name: 'Next-token generation', intuition: 'Predict one token, append it, then predict the next.', steps: ['Tokenize prompt', 'Compute token embeddings', 'Run transformer layers', 'Get probability for next token', 'Choose token using decoding strategy', 'Append and repeat until stop'], pseudocode: ['tokens = tokenize(prompt)', 'while not stop:', '  logits = model(tokens)', '  probs = softmax(logits[-1] / temperature)', '  next = decode_choice(probs)', '  tokens.append(next)'] },
    formulas: [{ name: 'Scaled dot-product attention', expression: 'Attention(Q,K,V)=softmax(QKᵀ/√dₖ)V', breakdown: ['Q means query: what this token is looking for.', 'K means key: what each token offers.', 'V means value: information to copy/mix.', 'QKᵀ scores matches.', '√dₖ scaling prevents extreme scores.', 'softmax turns scores into weights.'], derivation: ['Compare each query with keys using dot product.', 'Scale scores for numerical stability.', 'Normalize into probabilities with softmax.', 'Take weighted sum of values.'] }],
    approaches: [
      { name: 'Prompt only', whenToUse: 'General reasoning or transformation without private knowledge.', tradeoff: 'Simple but limited to model knowledge/context.' },
      { name: 'RAG', whenToUse: 'Need answers grounded in documents.', tradeoff: 'Requires retrieval quality and citation handling.' },
      { name: 'Fine-tuning', whenToUse: 'Need consistent style/format or specialized behavior from examples.', tradeoff: 'Not ideal for frequently changing facts.' },
      { name: 'Tool calling', whenToUse: 'Need exact actions or fresh data.', tradeoff: 'Requires schemas, validation, and error handling.' },
    ],
    commonMistakes: [
      { mistake: 'Putting unlimited documents into prompts.', avoid: 'Chunk, retrieve, rank, and summarize based on context budget.' },
      { mistake: 'Using high temperature for factual extraction.', avoid: 'Use low temperature and strict output schema.' },
      { mistake: 'Trusting generated facts without grounding.', avoid: 'Use retrieval, citations, and verification.' },
    ],
    workedExample: { problem: 'Summarize a 100-page policy document.', approach: 'Chunk + map-reduce summarization or RAG question answering.', why: 'The full document may exceed context, and users need traceable answers.', steps: ['Split by headings', 'Summarize chunks', 'Combine summaries', 'For questions, retrieve relevant chunks', 'Cite source sections'] },
    practice: [
      { level: 'Easy', prompt: 'Explain token vs word.', hint: 'A token can be a word, part of a word, punctuation, or space pattern.' },
      { level: 'Medium', prompt: 'When would you lower temperature?', hint: 'When you need consistency and factuality.' },
      { level: 'Hard', prompt: 'Design a RAG pipeline for your own Learning repo.', hint: 'Ingest files, split, embed, vector store, retrieve, answer, evaluate.' },
    ],
    quiz: [{ question: 'What does attention produce?', options: ['A weighted mixture of value vectors', 'A database table', 'A CSS selector', 'A password'], answer: 0, explanation: 'Attention uses query-key scores to weight value vectors.' }],
    references: [{ label: 'OpenAI docs', url: 'https://platform.openai.com/docs' }, { label: 'Anthropic docs', url: 'https://docs.anthropic.com/' }],
  },
  {
    id: 'llm-apps-agents',
    module: 'LLM Applications',
    title: 'Prompting, RAG, tool calling, agents, LangGraph, Semantic Kernel, and MCP',
    difficulty: 'Production',
    duration: '120 min',
    sourceFocus: ['Anthropic docs', 'OpenAI docs', 'LangGraph', 'Semantic Kernel', 'MCP'],
    whyItMatters: 'Real LLM products are not just prompts. They are workflows: retrieve information, call tools, maintain state, evaluate outputs, and recover from errors.',
    dumbExplanation: 'A chatbot becomes useful when it can look things up, use tools, remember steps, and follow a workflow. RAG is giving it the right notes. Tool calling is giving it hands. Agents are letting it decide steps toward a goal.',
    developerExplanation: 'LLM apps coordinate model calls with retrieval, structured outputs, function/tool schemas, orchestration graphs, memory/state, and external protocols. LangGraph models stateful agent workflows as graphs; Semantic Kernel organizes skills/plugins and planners; MCP standardizes tool/resource connections between models and systems.',
    jargon: [
      { term: 'RAG', meaning: 'Retrieval-Augmented Generation: retrieve relevant context before generating.', useCase: 'Answer questions from private docs.' },
      { term: 'Tool/function calling', meaning: 'The model emits structured arguments for a tool your code executes.', useCase: 'Search database, send email, call calculator.' },
      { term: 'Agent', meaning: 'A system where an LLM chooses actions over multiple steps.', useCase: 'Research assistant that searches, reads, summarizes, and writes.' },
      { term: 'Graph workflow', meaning: 'A workflow represented as nodes and edges.', useCase: 'LangGraph agent with plan, act, observe, revise nodes.' },
      { term: 'MCP', meaning: 'Model Context Protocol, a standard way to expose tools/resources to AI apps.', useCase: 'Connect an agent to files, GitHub, databases, or browsers.' },
    ],
    algorithm: { name: 'RAG question answering', intuition: 'Do not ask the model to remember everything; fetch the right notes first.', steps: ['Load documents', 'Split into chunks', 'Create embeddings', 'Store vectors', 'Embed user question', 'Retrieve similar chunks', 'Generate answer constrained by chunks', 'Evaluate and cite'], pseudocode: ['chunks = split(docs)', 'vectors = embed(chunks)', 'store.upsert(vectors)', 'qvec = embed(question)', 'context = store.top_k(qvec, k=5)', 'answer = llm(prompt(question, context))'] },
    approaches: [
      { name: 'Single prompt chain', whenToUse: 'One predictable transformation.', tradeoff: 'Simple and reliable but not flexible.' },
      { name: 'RAG pipeline', whenToUse: 'Knowledge-heavy Q&A.', tradeoff: 'Quality depends on chunking/retrieval.' },
      { name: 'Agent loop', whenToUse: 'Open-ended multi-step tasks.', tradeoff: 'Powerful but harder to test/control.' },
      { name: 'Graph-based agent', whenToUse: 'Need reliable state transitions and checkpoints.', tradeoff: 'More setup, better control.' },
    ],
    commonMistakes: [
      { mistake: 'Letting agents run without limits.', avoid: 'Set max iterations, budgets, tool permissions, and stop conditions.' },
      { mistake: 'Using vague tool schemas.', avoid: 'Make JSON schemas strict and validate arguments before execution.' },
      { mistake: 'Skipping evaluation datasets.', avoid: 'Create golden questions and adversarial cases before shipping.' },
    ],
    workedExample: { problem: 'Build a learning tutor over AI books and docs.', approach: 'Use RAG plus lesson-generation templates and quizzes.', why: 'The source content is large and evolving; retrieval keeps answers grounded while templates ensure beginner-friendly pedagogy.', steps: ['Index source notes', 'Map concepts to curriculum', 'Generate original explanations', 'Attach citations', 'Create quizzes', 'Track weak areas', 'Recommend next lessons'] },
    practice: [
      { level: 'Easy', prompt: 'Name one task that needs tool calling instead of pure prompting.', hint: 'Anything requiring exact external action or fresh data.' },
      { level: 'Medium', prompt: 'Design a tool schema for a calculator.', hint: 'Inputs: operation and numbers. Output: result.' },
      { level: 'Hard', prompt: 'Sketch a LangGraph-style workflow for research.', hint: 'Plan -> search -> read -> summarize -> critique -> final.' },
    ],
    quiz: [{ question: 'What is MCP mainly for?', options: ['Styling webpages', 'Standardizing context/tools/resources for AI apps', 'Training GPUs', 'Compressing images'], answer: 1, explanation: 'MCP provides a standard interface for tools and resources.' }],
    references: [{ label: 'LangGraph docs', url: 'https://langchain-ai.github.io/langgraph/' }, { label: 'MCP', url: 'https://modelcontextprotocol.io/' }, { label: 'Semantic Kernel', url: 'https://learn.microsoft.com/semantic-kernel/' }],
  },
  {
    id: 'production-ai',
    module: 'Production AI',
    title: 'Evaluation, safety, architecture, DevOps, and cost',
    difficulty: 'Production',
    duration: '110 min',
    sourceFocus: ['Made With ML', 'Chip Huyen AI Engineering', 'AWS Well-Architected', 'System Design Primer', 'DevOps Books'],
    whyItMatters: 'A model demo becomes a product only when it is reliable, measurable, secure, maintainable, and affordable.',
    dumbExplanation: 'Building AI is like building a restaurant. The recipe matters, but so do cleanliness, cost, speed, customer feedback, backups, and safety rules.',
    developerExplanation: 'Production AI combines ML evaluation, data/version control, CI/CD, observability, system design, security, reliability engineering, and cost-performance optimization. LLM systems add prompt/version management, eval sets, guardrails, rate limits, latency budgets, and human feedback loops.',
    jargon: [
      { term: 'Evaluation/eval', meaning: 'A test that measures model/system quality.', useCase: 'Golden Q&A set for a tutor bot.' },
      { term: 'Observability', meaning: 'Logs, metrics, traces, and dashboards that explain system behavior.', useCase: 'Track latency, errors, token cost, bad answers.' },
      { term: 'SLA/SLO', meaning: 'Reliability promises/objectives.', useCase: '99.9% successful responses under 3 seconds.' },
      { term: 'CI/CD', meaning: 'Automated testing and deployment pipeline.', useCase: 'Run evals before deploying prompt changes.' },
      { term: 'Well-Architected', meaning: 'AWS framework for operational excellence, security, reliability, performance, cost, sustainability.', useCase: 'Review cloud architecture decisions.' },
    ],
    approaches: [
      { name: 'Offline evaluation', whenToUse: 'Before deployment.', tradeoff: 'Repeatable but may miss real user behavior.' },
      { name: 'Online monitoring', whenToUse: 'After deployment.', tradeoff: 'Real behavior but needs privacy and alerting design.' },
      { name: 'Human review', whenToUse: 'High-risk or subjective outputs.', tradeoff: 'High quality but slower/costlier.' },
      { name: 'Canary release', whenToUse: 'Risky changes.', tradeoff: 'Safer rollout, more deployment complexity.' },
    ],
    commonMistakes: [
      { mistake: 'No regression tests for prompts.', avoid: 'Treat prompts and retrieval config as code; run evals on every change.' },
      { mistake: 'Ignoring cost until launch.', avoid: 'Track cost per task during development.' },
      { mistake: 'Logging private data carelessly.', avoid: 'Redact secrets/PII and define retention policies.' },
    ],
    workedExample: { problem: 'Deploy an AI tutor.', approach: 'Use an eval gate before every release.', why: 'A tutor must be correct, safe, and understandable for beginners.', steps: ['Create 100 test questions', 'Score correctness and clarity', 'Track hallucination rate', 'Measure latency/cost', 'Canary to small user group', 'Monitor failures and update content'] },
    practice: [
      { level: 'Easy', prompt: 'List three metrics for an LLM tutor.', hint: 'Correctness, helpfulness, latency, cost, citation quality.' },
      { level: 'Medium', prompt: 'Design a CI step for prompt changes.', hint: 'Run golden evals and block if score drops.' },
      { level: 'Hard', prompt: 'Create a production architecture for RAG with monitoring.', hint: 'Include ingestion, vector DB, API, model gateway, logs, evals, dashboards.' },
    ],
    quiz: [{ question: 'Why are evals important?', options: ['They replace all monitoring', 'They measure quality and catch regressions', 'They make CSS faster', 'They eliminate all bugs'], answer: 1, explanation: 'Evals give repeatable quality checks, especially before deployment.' }],
    references: [{ label: 'AWS Well-Architected', url: 'https://aws.amazon.com/architecture/well-architected/' }, { label: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' }, { label: 'AI Engineering', url: 'https://github.com/chiphuyen/aie-book' }],
  },
  {
    id: 'linear-algebra-ml',
    module: 'Math for ML',
    title: 'Linear algebra for ML: vectors, matrices, dot products, and eigen intuition',
    difficulty: 'Foundation',
    duration: '90 min',
    sourceFocus: ['Deep Learning Book', 'Hands-On ML', 'Cheatsheets for AI'],
    whyItMatters: 'Nearly every ML model turns real-world things into vectors and learns matrix operations over them.',
    dumbExplanation: 'A vector is a list of numbers. A matrix is a table of numbers. ML uses them because computers need numbers to represent houses, images, words, users, and products.',
    developerExplanation: 'Features are represented as vectors, datasets as matrices, and model layers as matrix transformations. Dot products measure alignment/similarity, matrix multiplication batches many dot products, and eigenvectors describe directions preserved by a transformation.',
    jargon: [
      { term: 'Vector', meaning: 'An ordered list of numbers representing one thing.', useCase: 'A house can be [size, bedrooms, age].' },
      { term: 'Matrix', meaning: 'A rectangular grid of numbers.', useCase: 'A dataset with rows as examples and columns as features.' },
      { term: 'Dot product', meaning: 'Multiply matching entries and add them.', useCase: 'Measure similarity or compute a linear model output.' },
      { term: 'Norm', meaning: 'The length/size of a vector.', useCase: 'Normalize embeddings before cosine similarity.' },
      { term: 'Eigenvector', meaning: 'A direction that a matrix stretches or shrinks without rotating.', useCase: 'PCA finds important directions in data.' },
    ],
    formulas: [
      { name: 'Dot product', expression: 'a·b = Σ aᵢbᵢ', breakdown: ['a and b are vectors.', 'i indexes each position.', 'Multiply matching positions.', 'Sum all products into one score.'], derivation: ['Similarity should be large when matching entries point the same way.', 'Multiplication rewards same sign and magnitude.', 'Summation combines all dimensions.'] },
      { name: 'Matrix-vector product', expression: 'y = Xw', breakdown: ['X is a matrix of rows/examples.', 'w is a weight vector.', 'Each output y row is a dot product.', 'This computes many predictions at once.'], derivation: ['A linear model uses one dot product per example.', 'Stack examples as rows.', 'Matrix multiplication is batched dot products.'] },
    ],
    algorithm: { name: 'Cosine similarity', intuition: 'Compare direction instead of raw size.', steps: ['Represent items as vectors', 'Compute dot product', 'Compute both vector lengths', 'Divide dot product by length product'], pseudocode: ['score = dot(a, b) / (norm(a) * norm(b))', 'if score near 1: very similar', 'if score near 0: unrelated', 'if score near -1: opposite'] },
    approaches: [
      { name: 'Raw feature vectors', whenToUse: 'Structured tabular data.', tradeoff: 'Interpretable but needs scaling.' },
      { name: 'Learned embeddings', whenToUse: 'Text/images/users/products.', tradeoff: 'Powerful but less directly interpretable.' },
      { name: 'Dimensionality reduction', whenToUse: 'Too many correlated features.', tradeoff: 'Simplifies data but can lose meaning.' },
    ],
    commonMistakes: [
      { mistake: 'Ignoring shapes.', avoid: 'Write dimensions beside every matrix: X is m×n, w is n×1, output is m×1.' },
      { mistake: 'Confusing rows and columns.', avoid: 'Use rows as examples and columns as features consistently.' },
      { mistake: 'Using distance on unscaled features.', avoid: 'Normalize/standardize when units differ.' },
    ],
    workedExample: { problem: 'Compare two student profiles represented by skill vectors.', approach: 'Use cosine similarity.', why: 'We care about skill pattern similarity, not whether one student has more total hours.', steps: ['Create vectors for Python, math, ML hours', 'Normalize by length', 'Compute dot product', 'Interpret score'] },
    practice: [
      { level: 'Easy', prompt: 'Compute [1,2]·[3,4].', hint: '1×3 + 2×4 = 11.' },
      { level: 'Medium', prompt: 'If X is 100×5 and w is 5×1, what is Xw shape?', hint: 'Outer dimensions remain: 100×1.' },
      { level: 'Hard', prompt: 'Explain why embeddings use high-dimensional vectors.', hint: 'Many dimensions let models encode many independent semantic signals.' },
    ],
    quiz: [{ question: 'What does a dot product often measure?', options: ['File size', 'Alignment/similarity', 'Database latency', 'CSS width'], answer: 1, explanation: 'Large positive dot products mean vectors point in similar directions with large magnitudes.' }],
    references: [{ label: 'Deep Learning Book', url: 'https://www.deeplearningbook.org/' }],
  },
  {
    id: 'probability-statistics-ml',
    module: 'Math for ML',
    title: 'Probability and statistics for ML decisions',
    difficulty: 'Foundation',
    duration: '95 min',
    sourceFocus: ['Deep Learning Book', 'Made With ML', 'Cheatsheets for AI'],
    whyItMatters: 'ML is uncertainty engineering: data is noisy, predictions are probabilistic, and interviews test whether you reason under uncertainty.',
    dumbExplanation: 'Probability is about how likely something is. Statistics is about learning from samples without fooling yourself.',
    developerExplanation: 'Probability models uncertainty; statistics estimates population properties from samples. ML uses distributions, expectation, variance, likelihood, confidence intervals, hypothesis tests, and Bayesian thinking to train/evaluate models and experiments.',
    jargon: [
      { term: 'Random variable', meaning: 'A quantity whose value is uncertain.', useCase: 'Whether a user clicks an ad.' },
      { term: 'Distribution', meaning: 'A description of possible values and their probabilities.', useCase: 'Model prediction confidence.' },
      { term: 'Expectation', meaning: 'Long-run average value.', useCase: 'Expected loss minimized during training.' },
      { term: 'Variance', meaning: 'How spread out values are.', useCase: 'High variance models overfit.' },
      { term: 'p-value', meaning: 'Probability of seeing data this extreme if the null hypothesis were true.', useCase: 'A/B test analysis.' },
    ],
    formulas: [
      { name: 'Conditional probability', expression: 'P(A|B) = P(A ∩ B) / P(B)', breakdown: ['P(A|B) means chance of A after knowing B.', 'P(A ∩ B) means both A and B happen.', 'Divide by P(B) because B is the new universe.'], derivation: ['Restrict attention to cases where B happened.', 'Among those cases, count how often A also happened.'] },
      { name: 'Bayes rule', expression: 'P(A|B)=P(B|A)P(A)/P(B)', breakdown: ['Prior P(A) is belief before evidence.', 'Likelihood P(B|A) says how evidence behaves if A is true.', 'P(B) normalizes all possibilities.'], derivation: ['Start from P(A∩B)=P(A|B)P(B).', 'Also P(A∩B)=P(B|A)P(A).', 'Set equal and solve for P(A|B).'] },
    ],
    algorithm: { name: 'A/B test reasoning', intuition: 'Compare versions while separating real signal from random noise.', steps: ['Define metric first', 'Randomly assign users', 'Collect enough samples', 'Compute effect size', 'Check uncertainty', 'Decide ship/iterate/stop'], pseudocode: ['metric_A = conversions_A / users_A', 'metric_B = conversions_B / users_B', 'lift = metric_B - metric_A', 'if confidence_interval excludes 0: consider significant'] },
    approaches: [
      { name: 'Frequentist testing', whenToUse: 'Standard A/B testing and interviews.', tradeoff: 'Clear procedures but p-values are often misread.' },
      { name: 'Bayesian estimation', whenToUse: 'Need direct probability statements and priors.', tradeoff: 'Intuitive but requires prior choices.' },
      { name: 'Bootstrap', whenToUse: 'Complicated metrics without easy formulas.', tradeoff: 'Flexible but computational.' },
    ],
    commonMistakes: [
      { mistake: 'Treating correlation as causation.', avoid: 'Use randomized experiments or causal designs.' },
      { mistake: 'Peeking at tests repeatedly.', avoid: 'Use fixed sample sizes or sequential testing methods.' },
      { mistake: 'Ignoring base rates.', avoid: 'Always compare prediction to prior probability.' },
    ],
    workedExample: { problem: 'A model says fraud probability is 0.9. Should you block the payment?', approach: 'Use expected cost, not probability alone.', why: 'False positives and false negatives have different business costs.', steps: ['Estimate fraud probability', 'Estimate loss if fraud', 'Estimate cost of blocking good user', 'Choose action with lower expected cost'] },
    practice: [
      { level: 'Easy', prompt: 'If 20 of 100 users convert, what is conversion rate?', hint: '20/100 = 20%.' },
      { level: 'Medium', prompt: 'Explain variance to a non-technical person.', hint: 'Use spread around average.' },
      { level: 'Hard', prompt: 'Design an A/B test for a recommender ranking change.', hint: 'Pick metric, randomization unit, guardrails, duration, and analysis.' },
    ],
    quiz: [{ question: 'What is the main purpose of a validation set?', options: ['Train forever', 'Tune choices on data not used for fitting', 'Store CSS', 'Replace labels'], answer: 1, explanation: 'Validation data estimates performance while selecting models/hyperparameters.' }],
    references: [{ label: 'Made With ML', url: 'https://madewithml.com/' }],
  },
  {
    id: 'classification-metrics',
    module: 'Classical ML',
    title: 'Classification, logistic regression, and interview metrics',
    difficulty: 'Foundation',
    duration: '95 min',
    sourceFocus: ['Hands-On ML', 'Made With ML'],
    whyItMatters: 'Many FAANG ML interviews ask how you classify, evaluate, and trade off false positives vs false negatives.',
    dumbExplanation: 'Classification means choosing a category: spam/not spam, fraud/not fraud, cat/dog. Logistic regression turns a score into a probability between 0 and 1.',
    developerExplanation: 'Binary classifiers estimate P(y=1|x). Logistic regression uses a linear score z=w·x+b passed through sigmoid. Threshold choice converts probabilities into labels; metrics depend on business costs and class imbalance.',
    jargon: [
      { term: 'Precision', meaning: 'Of predicted positives, how many were correct?', useCase: 'Avoid accusing good users of fraud.' },
      { term: 'Recall', meaning: 'Of actual positives, how many did we catch?', useCase: 'Catch as many fraudulent transactions as possible.' },
      { term: 'F1 score', meaning: 'Harmonic mean of precision and recall.', useCase: 'Balance both when classes are imbalanced.' },
      { term: 'ROC-AUC', meaning: 'Ranking quality across thresholds.', useCase: 'Compare classifiers independent of one threshold.' },
      { term: 'Confusion matrix', meaning: 'Table of TP, FP, TN, FN.', useCase: 'Diagnose error types.' },
    ],
    formulas: [
      { name: 'Sigmoid', expression: 'σ(z)=1/(1+e^-z)', breakdown: ['z is raw model score.', 'e is exponential constant.', 'Output is between 0 and 1.', 'Large z approaches 1; negative z approaches 0.'], derivation: ['We need a smooth function mapping any real score to probability range.', 'The logistic curve does that and has convenient derivatives.'] },
      { name: 'Precision and recall', expression: 'Precision=TP/(TP+FP), Recall=TP/(TP+FN)', breakdown: ['TP true positives.', 'FP false alarms.', 'FN missed positives.', 'Precision punishes FP; recall punishes FN.'], derivation: ['Ask correctness among predicted positives for precision.', 'Ask coverage among real positives for recall.'] },
    ],
    algorithm: { name: 'Threshold tuning', intuition: 'The model outputs probabilities; business decides where to draw the line.', steps: ['Train classifier', 'Predict probabilities on validation set', 'Try thresholds', 'Compute precision/recall/F1/cost', 'Choose threshold matching business risk'], pseudocode: ['for t in thresholds:', '  y_pred = probs >= t', '  score = metric(y_true, y_pred)', 'choose t with best score or acceptable tradeoff'] },
    approaches: [
      { name: 'Logistic regression', whenToUse: 'Interpretable linear baseline.', tradeoff: 'Fast but limited to mostly linear boundaries.' },
      { name: 'Tree models', whenToUse: 'Tabular data with nonlinear rules.', tradeoff: 'Less smooth but strong performance.' },
      { name: 'Neural classifiers', whenToUse: 'Text, images, complex signals.', tradeoff: 'Powerful but needs data/compute.' },
    ],
    commonMistakes: [
      { mistake: 'Using accuracy on imbalanced data.', avoid: 'Check precision, recall, PR-AUC, and confusion matrix.' },
      { mistake: 'Forgetting threshold tuning.', avoid: 'Optimize threshold for business cost.' },
      { mistake: 'Leaking future information.', avoid: 'Split data by time when predicting future events.' },
    ],
    workedExample: { problem: 'Fraud detection has 1% fraud rate.', approach: 'Optimize recall at acceptable precision.', why: 'Accuracy can be 99% by predicting no fraud, which is useless.', steps: ['Create time-based split', 'Train baseline', 'Check PR curve', 'Pick threshold', 'Review false positives manually'] },
    practice: [
      { level: 'Easy', prompt: 'If TP=80 and FP=20, compute precision.', hint: '80/(80+20)=0.8.' },
      { level: 'Medium', prompt: 'When prefer recall over precision?', hint: 'When missing positives is very costly: cancer screening, fraud.' },
      { level: 'Hard', prompt: 'Design metrics for toxic-content detection.', hint: 'Balance harm prevention, false censorship, user appeals, and latency.' },
    ],
    quiz: [{ question: 'Why can accuracy be misleading?', options: ['It never works', 'Class imbalance can hide failure on rare class', 'It is not a number', 'It requires GPUs'], answer: 1, explanation: 'A majority-class classifier can get high accuracy while missing the important minority class.' }],
    references: [{ label: 'Hands-On ML 3', url: 'https://github.com/ageron/handson-ml3' }],
  },
  {
    id: 'trees-ensembles-boosting',
    module: 'Classical ML',
    title: 'Decision trees, random forests, and gradient boosting',
    difficulty: 'Intermediate',
    duration: '100 min',
    sourceFocus: ['Hands-On ML', 'Made With ML'],
    whyItMatters: 'For tabular ML interviews and real projects, tree ensembles are often stronger than deep learning.',
    dumbExplanation: 'A decision tree asks yes/no questions until it reaches an answer. A forest averages many trees. Boosting builds trees one after another to fix previous mistakes.',
    developerExplanation: 'Trees recursively partition feature space by impurity reduction. Random forests reduce variance via bagging and feature randomness. Gradient boosting fits weak learners to residuals/gradients, producing strong tabular predictors.',
    jargon: [
      { term: 'Impurity', meaning: 'How mixed labels are inside a node.', useCase: 'Choose splits that make child nodes purer.' },
      { term: 'Bagging', meaning: 'Train many models on bootstrapped samples and average.', useCase: 'Random forests.' },
      { term: 'Boosting', meaning: 'Train models sequentially to fix errors.', useCase: 'XGBoost/LightGBM/CatBoost.' },
      { term: 'Feature importance', meaning: 'Estimate of which features influence predictions.', useCase: 'Debug tabular models.' },
    ],
    formulas: [{ name: 'Gini impurity', expression: 'Gini = 1 - Σpₖ²', breakdown: ['pₖ is fraction of class k in node.', 'Squaring rewards dominant classes.', 'Lower Gini means purer node.'], derivation: ['Probability of correct random label pick is Σpₖ².', 'Impurity is one minus that purity.'] }],
    algorithm: { name: 'Decision tree split search', intuition: 'Ask the question that best separates examples.', steps: ['For each feature', 'Try candidate thresholds', 'Compute impurity before and after split', 'Pick best impurity reduction', 'Repeat recursively'], pseudocode: ['best = None', 'for feature in features:', '  for threshold in values(feature):', '    score = impurity(parent) - weighted_impurity(children)', 'choose max score'] },
    approaches: [
      { name: 'Single tree', whenToUse: 'Need interpretability.', tradeoff: 'High variance and can overfit.' },
      { name: 'Random forest', whenToUse: 'Strong baseline with little tuning.', tradeoff: 'Less interpretable than one tree.' },
      { name: 'Gradient boosting', whenToUse: 'Top tabular performance.', tradeoff: 'More tuning and leakage sensitivity.' },
    ],
    commonMistakes: [
      { mistake: 'Letting trees grow unlimited.', avoid: 'Tune max_depth, min_samples_leaf, and validation metrics.' },
      { mistake: 'Assuming feature importance proves causality.', avoid: 'Use it as diagnostic, not causal proof.' },
      { mistake: 'Ignoring time leakage in boosting.', avoid: 'Use time-aware validation.' },
    ],
    workedExample: { problem: 'Predict customer churn from account behavior.', approach: 'Start with gradient boosting.', why: 'Tabular nonlinear interactions are where boosting excels.', steps: ['Build features only from past data', 'Train baseline logistic regression', 'Train random forest/boosting', 'Compare PR-AUC', 'Inspect errors and feature importance'] },
    practice: [
      { level: 'Easy', prompt: 'What is one advantage of random forests over one tree?', hint: 'Averaging reduces variance.' },
      { level: 'Medium', prompt: 'Why is boosting sequential?', hint: 'Each new learner focuses on previous errors.' },
      { level: 'Hard', prompt: 'Design validation for churn prediction.', hint: 'Use time split and prevent future leakage.' },
    ],
    quiz: [{ question: 'Which method trains trees sequentially to fix errors?', options: ['Random forest', 'Gradient boosting', 'KNN', 'PCA'], answer: 1, explanation: 'Boosting adds weak learners that target residuals/gradients.' }],
    references: [{ label: 'Hands-On ML 3', url: 'https://github.com/ageron/handson-ml3' }],
  },
  {
    id: 'unsupervised-pca-clustering',
    module: 'Classical ML',
    title: 'Unsupervised learning: clustering, PCA, and feature engineering',
    difficulty: 'Intermediate',
    duration: '95 min',
    sourceFocus: ['Hands-On ML', 'Made With ML'],
    whyItMatters: 'Not all data has labels. Interviews test how you discover structure, reduce dimensions, and create useful features.',
    dumbExplanation: 'Clustering groups similar things without answer labels. PCA compresses many columns into fewer important directions. Feature engineering turns raw data into signals models can use.',
    developerExplanation: 'Unsupervised methods infer structure without labels. K-means minimizes within-cluster distances; PCA finds orthogonal directions of maximum variance; feature engineering encodes domain assumptions into model inputs.',
    jargon: [
      { term: 'Centroid', meaning: 'Center point of a cluster.', useCase: 'K-means assigns points to nearest centroid.' },
      { term: 'Dimensionality reduction', meaning: 'Represent data with fewer features.', useCase: 'Visualize embeddings or remove noise.' },
      { term: 'Principal component', meaning: 'Direction explaining high variance.', useCase: 'PCA compression.' },
      { term: 'Feature engineering', meaning: 'Creating useful model inputs from raw data.', useCase: 'Convert timestamp to day-of-week.' },
    ],
    formulas: [{ name: 'K-means objective', expression: 'min Σ ||xᵢ - μ_cluster(i)||²', breakdown: ['xᵢ is a data point.', 'μ is the assigned cluster center.', 'Distance squared measures closeness.', 'The algorithm minimizes total within-cluster spread.'], derivation: ['Good clusters should have nearby members.', 'Measure each point distance to its center.', 'Sum all distances and minimize.'] }],
    algorithm: { name: 'K-means', intuition: 'Guess centers, assign points, move centers, repeat.', steps: ['Choose k centers', 'Assign every point to nearest center', 'Move each center to average of assigned points', 'Repeat until stable'], pseudocode: ['centers = initialize(k)', 'while changed:', '  labels = nearest_center(X, centers)', '  centers = mean_points_per_label(X, labels)'] },
    approaches: [
      { name: 'K-means', whenToUse: 'Rough spherical clusters.', tradeoff: 'Needs k and struggles with odd shapes.' },
      { name: 'DBSCAN', whenToUse: 'Density clusters and outliers.', tradeoff: 'Sensitive to distance parameters.' },
      { name: 'PCA', whenToUse: 'Compression/visualization/denoising.', tradeoff: 'Linear and may lose interpretability.' },
    ],
    commonMistakes: [
      { mistake: 'Using clustering as truth.', avoid: 'Validate clusters with domain review and downstream usefulness.' },
      { mistake: 'Not scaling before distance methods.', avoid: 'Standardize features for K-means/PCA.' },
      { mistake: 'Creating leaky features.', avoid: 'Only use information available at prediction time.' },
    ],
    workedExample: { problem: 'Segment users by behavior.', approach: 'Create behavior features, scale, cluster, inspect segments.', why: 'Unlabeled segmentation helps product teams understand patterns.', steps: ['Aggregate sessions, spend, recency', 'Scale features', 'Try K-means values', 'Profile clusters', 'Validate with business team'] },
    practice: [
      { level: 'Easy', prompt: 'Why scale before K-means?', hint: 'Large-unit features dominate distance.' },
      { level: 'Medium', prompt: 'Give a useful feature from a timestamp.', hint: 'Hour, day of week, recency, seasonality.' },
      { level: 'Hard', prompt: 'How would you evaluate clusters without labels?', hint: 'Use silhouette plus human/domain and downstream metrics.' },
    ],
    quiz: [{ question: 'PCA primarily finds directions of what?', options: ['Maximum variance', 'Maximum CSS specificity', 'Minimum RAM always', 'Random text'], answer: 0, explanation: 'Principal components are high-variance orthogonal directions.' }],
    references: [{ label: 'Hands-On ML 3', url: 'https://github.com/ageron/handson-ml3' }],
  },
  {
    id: 'cnn-vision',
    module: 'Deep Learning',
    title: 'CNNs for images: convolution, pooling, and vision mistakes',
    difficulty: 'Intermediate',
    duration: '100 min',
    sourceFocus: ['Deep Learning Book', 'Hands-On ML'],
    whyItMatters: 'CNNs are a core deep-learning architecture and a frequent interview topic for image problems.',
    dumbExplanation: 'A CNN scans a small window over an image looking for patterns like edges, corners, and textures. Early layers find simple shapes; later layers combine them into objects.',
    developerExplanation: 'Convolutional neural networks use shared filters over spatial neighborhoods, preserving locality and reducing parameters compared with dense layers. Pooling/downsampling builds some translation tolerance.',
    jargon: [
      { term: 'Kernel/filter', meaning: 'Small learnable grid slid over an image.', useCase: 'Detect edges or textures.' },
      { term: 'Stride', meaning: 'How far the filter moves each step.', useCase: 'Downsample feature maps.' },
      { term: 'Padding', meaning: 'Extra border pixels added around input.', useCase: 'Control output size.' },
      { term: 'Pooling', meaning: 'Summarize nearby activations.', useCase: 'Max-pooling keeps strongest local signal.' },
    ],
    formulas: [{ name: '2D convolution idea', expression: 'output[i,j] = ΣΣ input[i+a,j+b] × kernel[a,b]', breakdown: ['Take a local patch.', 'Multiply each patch pixel by filter value.', 'Sum to produce one output cell.', 'Repeat across image.'], derivation: ['Images have local patterns.', 'A small reusable detector can scan every location.', 'Shared weights reduce parameters.'] }],
    algorithm: { name: 'CNN image classifier', intuition: 'Learn pattern detectors and combine them into class evidence.', steps: ['Normalize images', 'Apply convolution + activation', 'Downsample', 'Repeat blocks', 'Flatten or global-average-pool', 'Classify with softmax'], pseudocode: ['x = conv_relu(image)', 'x = pool(x)', 'x = conv_relu(x)', 'x = global_avg_pool(x)', 'probs = softmax(linear(x))'] },
    approaches: [
      { name: 'Train from scratch', whenToUse: 'Large labeled image dataset.', tradeoff: 'Expensive but fully customized.' },
      { name: 'Transfer learning', whenToUse: 'Small/medium labeled dataset.', tradeoff: 'Fast and strong but inherits source model biases.' },
      { name: 'Vision transformer', whenToUse: 'Large-scale modern vision tasks.', tradeoff: 'Powerful but data-hungry.' },
    ],
    commonMistakes: [
      { mistake: 'Data leakage through augmentation/splitting.', avoid: 'Split before augmentation and avoid near-duplicate leakage.' },
      { mistake: 'Ignoring class imbalance.', avoid: 'Use balanced metrics, sampling, or class weights.' },
      { mistake: 'Not inspecting wrong images.', avoid: 'Review false positives/negatives visually.' },
    ],
    workedExample: { problem: 'Classify defective product images.', approach: 'Use transfer learning CNN first.', why: 'Industrial datasets are often small; pretrained visual features help.', steps: ['Collect labeled images', 'Split by product batch/time', 'Augment training only', 'Fine-tune pretrained model', 'Inspect false negatives'] },
    practice: [
      { level: 'Easy', prompt: 'What does a convolution filter do?', hint: 'It scans local patches for a pattern.' },
      { level: 'Medium', prompt: 'Why use padding?', hint: 'To preserve border information and control output shape.' },
      { level: 'Hard', prompt: 'Design a defect detection evaluation plan.', hint: 'False negatives may be more costly than false positives.' },
    ],
    quiz: [{ question: 'Why do CNNs use shared filters?', options: ['To exploit repeated local patterns and reduce parameters', 'To remove all math', 'To make text longer', 'To avoid data'], answer: 0, explanation: 'The same visual pattern can appear anywhere in the image.' }],
    references: [{ label: 'Deep Learning Book', url: 'https://www.deeplearningbook.org/' }],
  },

  {
    id: 'sequence-models', module: 'Deep Learning', title: 'Sequence models: RNNs, LSTMs, GRUs, and why transformers replaced them', difficulty: 'Intermediate', duration: '95 min', sourceFocus: ['Deep Learning Book', 'Hands-On ML'], whyItMatters: 'Sequences appear in text, time series, speech, logs, and user behavior.', dumbExplanation: 'A sequence model reads one item after another and keeps a memory of what came before. LSTMs and GRUs add gates so the memory does not vanish too quickly.', developerExplanation: 'RNNs update a hidden state h_t from x_t and h_{t-1}. LSTMs/GRUs mitigate vanishing gradients through gated additive paths. Transformers replaced many RNN uses by parallel self-attention and better long-range dependency modeling.', jargon: [{ term: 'Hidden state', meaning: 'Memory vector carried across time steps.', useCase: 'Remember previous words.' }, { term: 'Vanishing gradient', meaning: 'Gradients shrink as they move backward through many steps.', useCase: 'Hard to learn long dependencies.' }, { term: 'Gate', meaning: 'Learned control deciding what to keep/forget.', useCase: 'LSTM forget/input/output gates.' }, { term: 'Teacher forcing', meaning: 'Training with true previous token as input.', useCase: 'Sequence generation training.' }], formulas: [{ name: 'Simple RNN update', expression: 'h_t = tanh(Wx_t + Uh_{t-1} + b)', breakdown: ['x_t current input.', 'h_{t-1} previous memory.', 'W and U are learned matrices.', 'tanh squashes state.'], derivation: ['Combine new input with previous memory.', 'Apply nonlinearity to create next memory.'] }], algorithm: { name: 'Sequence prediction loop', intuition: 'Read sequence step by step, update memory, output prediction.', steps: ['Initialize hidden state', 'For each item update state', 'Predict output from state', 'Backpropagate through time'], pseudocode: ['h = zeros()', 'for x_t in sequence:', '  h = cell(x_t, h)', '  y_t = output(h)'] }, approaches: [{ name: 'RNN/LSTM', whenToUse: 'Small sequence/time-series baselines.', tradeoff: 'Sequential and harder to parallelize.' }, { name: 'Transformer', whenToUse: 'Modern language/long-context tasks.', tradeoff: 'More compute/memory.' }, { name: 'Temporal CNN', whenToUse: 'Local sequence patterns.', tradeoff: 'Limited long-range modeling.' }], commonMistakes: [{ mistake: 'Using random train/test split for time series.', avoid: 'Use chronological splits.' }, { mistake: 'Ignoring sequence length padding masks.', avoid: 'Mask padded tokens in loss/attention.' }, { mistake: 'Assuming LSTM is always obsolete.', avoid: 'For small/streaming tasks, simpler recurrent models can still be practical.' }], workedExample: { problem: 'Predict next day demand.', approach: 'Start with lag features and a simple sequence model.', why: 'Time order matters; past demand informs future demand.', steps: ['Create chronological split', 'Build lag/rolling features', 'Train baseline', 'Try LSTM/transformer if needed', 'Evaluate by future period'] }, practice: [{ level: 'Easy', prompt: 'What is a hidden state?', hint: 'A memory vector.' }, { level: 'Medium', prompt: 'Why do LSTMs use gates?', hint: 'To keep/forget information and improve gradient flow.' }, { level: 'Hard', prompt: 'Design leakage-safe time-series validation.', hint: 'Train on past, validate on future.' }], quiz: [{ question: 'What problem do LSTMs address?', options: ['Vanishing gradients/long memory', 'CSS layout', 'File upload', 'GPU pricing'], answer: 0, explanation: 'Gates help preserve useful information over longer sequences.' }], references: [{ label: 'Deep Learning Book', url: 'https://www.deeplearningbook.org/' }],
  },
  {
    id: 'regularization-optimizers', module: 'Deep Learning', title: 'Regularization, normalization, and optimizers', difficulty: 'Intermediate', duration: '95 min', sourceFocus: ['Deep Learning Book', 'Hands-On ML'], whyItMatters: 'Interviewers expect you to explain why models overfit and how training is stabilized.', dumbExplanation: 'Regularization stops a model from memorizing. Normalization keeps numbers well-behaved. Optimizers decide how to update weights efficiently.', developerExplanation: 'Regularization constrains model complexity; dropout, weight decay, early stopping, and data augmentation reduce overfitting. Normalization layers stabilize activation distributions. Optimizers such as SGD with momentum and Adam control gradient updates.', jargon: [{ term: 'Weight decay', meaning: 'Penalty that discourages large weights.', useCase: 'Improve generalization.' }, { term: 'Dropout', meaning: 'Randomly disable units during training.', useCase: 'Prevent co-adaptation.' }, { term: 'Batch norm', meaning: 'Normalize activations using batch statistics.', useCase: 'Stabilize training.' }, { term: 'Adam', meaning: 'Adaptive optimizer using momentum and squared gradients.', useCase: 'Default optimizer for many neural nets.' }], formulas: [{ name: 'L2 regularized loss', expression: 'J_total = J_data + λΣw²', breakdown: ['J_data is prediction loss.', 'λ controls penalty strength.', 'Σw² penalizes large weights.'], derivation: ['Large weights can create overly sharp fits.', 'Add a cost for large weights.', 'Optimizer balances fit and simplicity.'] }], algorithm: { name: 'Early stopping', intuition: 'Stop when validation performance starts getting worse.', steps: ['Track validation loss each epoch', 'Save best model', 'If no improvement for patience epochs, stop', 'Restore best weights'], pseudocode: ['if val_loss < best: save()', 'else patience_count += 1', 'if patience_count > patience: stop'] }, approaches: [{ name: 'Dropout', whenToUse: 'Dense neural nets overfit.', tradeoff: 'Can slow convergence.' }, { name: 'Weight decay', whenToUse: 'Almost always as a mild regularizer.', tradeoff: 'Too high underfits.' }, { name: 'Data augmentation', whenToUse: 'Images/text/audio with label-preserving transformations.', tradeoff: 'Bad augmentations harm labels.' }], commonMistakes: [{ mistake: 'Applying dropout during inference.', avoid: 'Use train/eval modes correctly.' }, { mistake: 'Tuning on test set.', avoid: 'Keep test set untouched until final.' }, { mistake: 'Using Adam without checking learning rate.', avoid: 'Still tune LR and scheduler.' }], workedExample: { problem: 'Training loss drops but validation loss rises.', approach: 'Diagnose overfitting.', why: 'The model memorizes train data and fails on unseen data.', steps: ['Plot curves', 'Add augmentation/weight decay/dropout', 'Reduce model size', 'Use early stopping', 'Collect more data'] }, practice: [{ level: 'Easy', prompt: 'What is overfitting?', hint: 'Good on training, bad on new data.' }, { level: 'Medium', prompt: 'Why does weight decay help?', hint: 'It discourages overly complex large-weight solutions.' }, { level: 'Hard', prompt: 'Debug unstable neural net training.', hint: 'Check LR, normalization, gradients, data scaling, loss.' }], quiz: [{ question: 'Early stopping watches which data?', options: ['Validation data', 'Only training data', 'CSS file', 'Git log'], answer: 0, explanation: 'Validation performance estimates generalization during training.' }], references: [{ label: 'Hands-On ML 3', url: 'https://github.com/ageron/handson-ml3' }],
  },
  {
    id: 'fine-tuning-alignment', module: 'LLMs', title: 'Fine-tuning, instruction tuning, RLHF, and DPO', difficulty: 'Production', duration: '115 min', sourceFocus: ['OpenAI docs', 'Anthropic docs', 'AI Engineering'], whyItMatters: 'Top GenAI interviews ask when to prompt, retrieve, fine-tune, or align a model.', dumbExplanation: 'Fine-tuning is extra training so a model behaves more like you want. Alignment is teaching it to follow human preferences, not just predict text.', developerExplanation: 'Fine-tuning updates model weights on task examples. Instruction tuning trains response behavior. RLHF uses preference/reward modeling and policy optimization; DPO directly optimizes preferred vs rejected responses. These change behavior but are not a replacement for knowledge retrieval.', jargon: [{ term: 'Fine-tuning', meaning: 'Continue training a model on a task dataset.', useCase: 'Consistent extraction format or domain style.' }, { term: 'Instruction tuning', meaning: 'Train model to follow instructions.', useCase: 'Chat assistant behavior.' }, { term: 'RLHF', meaning: 'Reinforcement learning from human feedback.', useCase: 'Optimize helpful/preferred outputs.' }, { term: 'DPO', meaning: 'Direct Preference Optimization.', useCase: 'Train from chosen/rejected pairs more simply than RLHF.' }], formulas: [{ name: 'Preference pair idea', expression: 'preferred response > rejected response', breakdown: ['For same prompt, humans prefer one answer.', 'Training increases probability of preferred answer.', 'Training decreases relative probability of rejected answer.'], derivation: ['We need behavior, not just next-token prediction.', 'Preference data supplies direction.', 'Optimization shifts model policy toward preferred outputs.'] }], algorithm: { name: 'Fine-tuning workflow', intuition: 'Collect examples of desired behavior, train, evaluate, and compare against prompting/RAG baseline.', steps: ['Define behavior gap', 'Create high-quality examples', 'Split train/validation', 'Fine-tune small run', 'Evaluate against golden set', 'Compare cost/latency/quality'], pseudocode: ['dataset = prompt_response_examples', 'train, val = split(dataset)', 'job = fine_tune(base_model, train)', 'score = evaluate(job.model, eval_set)'] }, approaches: [{ name: 'Prompt engineering', whenToUse: 'Behavior can be specified in context.', tradeoff: 'Cheap but brittle for complex consistency.' }, { name: 'RAG', whenToUse: 'Need changing/private facts.', tradeoff: 'Retrieval quality bottleneck.' }, { name: 'Fine-tuning', whenToUse: 'Need style/format/skill from examples.', tradeoff: 'Needs data and evals.' }], commonMistakes: [{ mistake: 'Fine-tuning to add facts.', avoid: 'Use RAG for changing factual knowledge.' }, { mistake: 'Training on low-quality examples.', avoid: 'Curate examples; bad data teaches bad behavior.' }, { mistake: 'No baseline comparison.', avoid: 'Compare to prompt-only and RAG before spending.' }], workedExample: { problem: 'A support bot must answer in strict JSON.', approach: 'Try structured outputs first, fine-tune if many examples show recurring failures.', why: 'Schema constraints may solve it without weight updates.', steps: ['Create eval set', 'Try JSON schema/structured output', 'Measure failures', 'Fine-tune only if needed', 'Run regression evals'] }, practice: [{ level: 'Easy', prompt: 'When is RAG better than fine-tuning?', hint: 'Changing/private knowledge.' }, { level: 'Medium', prompt: 'What data do you need for DPO?', hint: 'Prompt, preferred response, rejected response.' }, { level: 'Hard', prompt: 'Design evals before fine-tuning a medical summarizer.', hint: 'Correctness, omissions, hallucination, safety, privacy.' }], quiz: [{ question: 'Fine-tuning is best for what?', options: ['Changing facts', 'Consistent learned behavior/style/format', 'Replacing all evals', 'Opening ports'], answer: 1, explanation: 'Fine-tuning changes behavior patterns; RAG is better for dynamic facts.' }], references: [{ label: 'OpenAI docs', url: 'https://platform.openai.com/docs' }, { label: 'Anthropic docs', url: 'https://docs.anthropic.com/' }],
  },

  {
    id: 'rag-retrieval-quality', module: 'LLM Applications', title: 'Advanced RAG: chunking, vector DBs, hybrid search, reranking, and evaluation', difficulty: 'Production', duration: '120 min', sourceFocus: ['OpenAI docs', 'Anthropic docs', 'AI Engineering'], whyItMatters: 'RAG quality often determines whether an LLM app is useful or hallucinated.', dumbExplanation: 'RAG is open-book answering. The hard part is finding the right page before asking the model to answer.', developerExplanation: 'Production RAG requires ingestion, chunking, metadata, embedding models, vector indexes, hybrid lexical/vector search, reranking, context packing, citation handling, and retrieval/generation evals.', jargon: [{ term: 'Chunking', meaning: 'Splitting documents into retrievable pieces.', useCase: 'Fit relevant context into model prompt.' }, { term: 'Vector database', meaning: 'Database optimized for nearest-neighbor embedding search.', useCase: 'Find similar document chunks.' }, { term: 'Hybrid search', meaning: 'Combine keyword and vector search.', useCase: 'Handle exact terms plus semantic meaning.' }, { term: 'Reranker', meaning: 'Model that reorders retrieved candidates.', useCase: 'Improve top context quality.' }], formulas: [{ name: 'Recall@k', expression: 'Recall@k = relevant retrieved in top k / total relevant', breakdown: ['k is number of retrieved chunks.', 'Numerator counts useful chunks found.', 'Denominator counts all useful chunks.'], derivation: ['For RAG, answer quality needs right evidence.', 'Measure how often retriever finds that evidence.'] }], algorithm: { name: 'Production RAG retrieval', intuition: 'Retrieve broadly, rerank carefully, then answer with citations.', steps: ['Parse documents', 'Chunk with overlap', 'Embed chunks', 'Store with metadata', 'Retrieve by vector/keyword', 'Rerank', 'Pack context', 'Generate cited answer', 'Evaluate'], pseudocode: ['candidates = vector_search(q) + keyword_search(q)', 'ranked = rerank(q, candidates)', 'context = pack(ranked[:k])', 'answer = llm(question, context)'] }, approaches: [{ name: 'Naive vector RAG', whenToUse: 'Prototype quickly.', tradeoff: 'Can miss exact keywords.' }, { name: 'Hybrid + rerank', whenToUse: 'Production knowledge apps.', tradeoff: 'More latency/cost.' }, { name: 'Knowledge graph RAG', whenToUse: 'Entity-heavy relational knowledge.', tradeoff: 'More modeling work.' }], commonMistakes: [{ mistake: 'Bad chunk size.', avoid: 'Evaluate chunk sizes by retrieval recall and answer quality.' }, { mistake: 'No citations.', avoid: 'Return source metadata and require grounded answers.' }, { mistake: 'Evaluating only final answer.', avoid: 'Separately evaluate retrieval and generation.' }], workedExample: { problem: 'Tutor over your Learning repo gives vague answers.', approach: 'Improve retrieval first.', why: 'If the right chunk is missing, the LLM cannot ground the answer.', steps: ['Create golden questions', 'Label supporting docs', 'Measure Recall@5', 'Tune chunking', 'Add reranker', 'Re-test answer quality'] }, practice: [{ level: 'Easy', prompt: 'What does a vector DB store?', hint: 'Embeddings plus metadata.' }, { level: 'Medium', prompt: 'Why combine keyword and vector search?', hint: 'Exact terms and semantic similarity each catch different cases.' }, { level: 'Hard', prompt: 'Design RAG evals for legal docs.', hint: 'Retrieval recall, citation correctness, hallucination, refusal behavior.' }], quiz: [{ question: 'What should you evaluate separately in RAG?', options: ['Retrieval and generation', 'Only colors', 'Only npm version', 'Only user name'], answer: 0, explanation: 'Bad answers may come from bad retrieval or bad generation; separate metrics reveal root cause.' }], references: [{ label: 'AI Engineering', url: 'https://github.com/chiphuyen/aie-book' }],
  },
  {
    id: 'mlops-lifecycle', module: 'MLOps', title: 'MLOps lifecycle: data pipelines, experiment tracking, registry, deployment, drift', difficulty: 'Production', duration: '120 min', sourceFocus: ['Made With ML', 'AI Engineering', 'DevOps Books'], whyItMatters: 'FAANG ML roles expect you to ship reliable ML systems, not just notebooks.', dumbExplanation: 'MLOps is the factory process for ML: collect data, train, test, package, deploy, monitor, and improve safely.', developerExplanation: 'MLOps operationalizes ML through reproducible pipelines, versioned data/code/models, experiment tracking, model registries, CI/CD, serving infrastructure, monitoring, drift detection, rollback, and governance.', jargon: [{ term: 'Model registry', meaning: 'Versioned store of trained model artifacts and metadata.', useCase: 'Promote model from staging to production.' }, { term: 'Data drift', meaning: 'Input distribution changes after deployment.', useCase: 'User behavior changes after a season.' }, { term: 'Concept drift', meaning: 'Relationship between input and label changes.', useCase: 'Fraud tactics evolve.' }, { term: 'Feature store', meaning: 'Managed system for reusable features.', useCase: 'Consistent training/serving features.' }], formulas: [{ name: 'Population Stability Index idea', expression: 'PSI = Σ(actual% - expected%) ln(actual% / expected%)', breakdown: ['Compare production distribution to training distribution.', 'Bins with large shifts contribute more.', 'Higher PSI suggests drift.'], derivation: ['We need a distance between distributions.', 'Compare bin percentages and weight by log ratio.'] }], algorithm: { name: 'Safe model rollout', intuition: 'Treat model releases like risky software releases with extra data checks.', steps: ['Train reproducibly', 'Evaluate offline', 'Register model', 'Deploy to shadow/canary', 'Monitor quality/latency/drift', 'Rollback if guardrails fail'], pseudocode: ['if offline_eval_passes:', '  register(model)', '  deploy_canary(model, traffic=5%)', '  if metrics_ok: ramp_up()', '  else rollback()'] }, approaches: [{ name: 'Batch inference', whenToUse: 'Predictions needed periodically.', tradeoff: 'Simple but not real-time.' }, { name: 'Online inference', whenToUse: 'Low-latency user requests.', tradeoff: 'Needs scalable serving.' }, { name: 'Streaming features', whenToUse: 'Fresh behavior matters.', tradeoff: 'Operational complexity.' }], commonMistakes: [{ mistake: 'Notebook-only training.', avoid: 'Convert experiments into reproducible pipelines.' }, { mistake: 'Training-serving skew.', avoid: 'Share feature definitions and validate online inputs.' }, { mistake: 'No rollback plan.', avoid: 'Keep previous model and deployment switch ready.' }], workedExample: { problem: 'Deploy churn prediction weekly.', approach: 'Batch pipeline with registry and monitoring.', why: 'Churn decisions do not require millisecond inference.', steps: ['Validate data', 'Train weekly', 'Log experiment', 'Register champion', 'Batch score users', 'Monitor drift and retention outcomes'] }, practice: [{ level: 'Easy', prompt: 'What is data drift?', hint: 'Production inputs change compared with training.' }, { level: 'Medium', prompt: 'Why use a model registry?', hint: 'Versioning, approvals, reproducibility.' }, { level: 'Hard', prompt: 'Design rollback for a bad recommender model.', hint: 'Canary, guardrail metrics, previous model, feature flags.' }], quiz: [{ question: 'Training-serving skew means what?', options: ['Train and production features differ', 'CSS is skewed', 'GPU is cold', 'Model has no name'], answer: 0, explanation: 'The model sees different feature logic/distributions in production than training.' }], references: [{ label: 'Made With ML', url: 'https://madewithml.com/' }],
  },
  {
    id: 'ml-system-design-rec-ranking', module: 'ML System Design', title: 'FAANG ML system design: recommendation, ranking, and ads pattern', difficulty: 'Production', duration: '130 min', sourceFocus: ['System Design Primer', 'Made With ML', 'AI Engineering'], whyItMatters: 'Recommendation/ranking systems are among the most common ML system design interview cases.', dumbExplanation: 'A recommender chooses what to show first. It needs to quickly find candidates, rank them, learn from feedback, and avoid bad user experiences.', developerExplanation: 'Large-scale ranking systems often use multi-stage architecture: candidate generation, retrieval, feature enrichment, ranking model, business rules, exploration, logging, training pipelines, online serving, and experimentation.', jargon: [{ term: 'Candidate generation', meaning: 'Fast step that finds possible items.', useCase: 'Retrieve 1000 videos from millions.' }, { term: 'Ranking', meaning: 'Order candidates by predicted utility.', useCase: 'Sort feed items.' }, { term: 'Feature freshness', meaning: 'How current serving features are.', useCase: 'Recent clicks matter.' }, { term: 'A/B test guardrail', meaning: 'Metric that must not regress.', useCase: 'Do not increase hides/reports.' }], algorithm: { name: 'Two-stage recommender', intuition: 'First find good possibilities cheaply, then rank fewer items carefully.', steps: ['Ingest items/users/events', 'Generate candidates', 'Fetch features', 'Rank candidates', 'Apply rules/diversity', 'Log impressions/clicks', 'Retrain and evaluate'], pseudocode: ['candidates = retrieve(user, k=1000)', 'features = enrich(user, candidates)', 'scores = ranker.predict(features)', 'feed = diversify(sort(scores))'] }, approaches: [{ name: 'Collaborative filtering', whenToUse: 'Lots of user-item interactions.', tradeoff: 'Cold-start problem.' }, { name: 'Content-based', whenToUse: 'Item metadata is strong.', tradeoff: 'Can be narrow/repetitive.' }, { name: 'Learning-to-rank', whenToUse: 'Many signals and labels.', tradeoff: 'Needs careful logging/evals.' }], commonMistakes: [{ mistake: 'Only optimizing clicks.', avoid: 'Add guardrails for quality, diversity, long-term retention.' }, { mistake: 'Ignoring cold start.', avoid: 'Use content features and exploration.' }, { mistake: 'No logging design.', avoid: 'Log impressions, positions, candidates, scores, and outcomes.' }], workedExample: { problem: 'Design YouTube-like recommendations.', approach: 'Candidate generation plus ranking.', why: 'Ranking all videos is too expensive.', steps: ['Define goals/metrics', 'Retrieve candidate videos', 'Rank with user/video/context features', 'Apply safety/diversity', 'Log feedback', 'Run A/B tests'] }, practice: [{ level: 'Easy', prompt: 'Why not rank every item directly?', hint: 'Too many items and too much latency.' }, { level: 'Medium', prompt: 'Name three recommender metrics.', hint: 'CTR, watch time, retention, hides, diversity.' }, { level: 'Hard', prompt: 'Design cold-start strategy for new users.', hint: 'Onboarding, popularity, content features, exploration.' }], quiz: [{ question: 'Why use candidate generation?', options: ['Reduce millions of items to manageable set', 'Delete users', 'Avoid metrics', 'Change CSS'], answer: 0, explanation: 'Candidate generation makes ranking computationally feasible.' }], references: [{ label: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' }],
  },
  {
    id: 'dsa-faang-roadmap', module: 'FAANG Interview Prep', title: 'DSA roadmap: patterns, complexity, and timed practice strategy', difficulty: 'Foundation', duration: '90 min', sourceFocus: ['System Design Primer', 'DevOps Books'], whyItMatters: 'Even AI/ML candidates often face coding rounds. You need pattern recognition plus speed.', dumbExplanation: 'DSA is learning common puzzle shapes. Once you recognize the shape, the solution becomes much easier.', developerExplanation: 'Interview DSA tests data structure selection, algorithmic complexity, correctness reasoning, edge cases, and communication. Pattern-based practice builds transfer across problem variants.', jargon: [{ term: 'Big-O', meaning: 'Growth rate of time or memory as input size increases.', useCase: 'Explain why O(n log n) beats O(n²).' }, { term: 'Two pointers', meaning: 'Use two indices to scan efficiently.', useCase: 'Sorted array pair problems.' }, { term: 'Sliding window', meaning: 'Maintain a moving range.', useCase: 'Longest substring or subarray problems.' }, { term: 'Dynamic programming', meaning: 'Reuse solutions to overlapping subproblems.', useCase: 'Knapsack, paths, edit distance.' }], formulas: [{ name: 'Big-O simplification', expression: '3n² + 10n + 5 → O(n²)', breakdown: ['Keep dominant term.', 'Drop constants.', 'Describe growth for large n.'], derivation: ['As n grows, n² dominates n and constants.', 'Big-O cares about scaling, not exact runtime.'] }], algorithm: { name: 'Interview problem breakdown', intuition: 'Do not jump to code; classify the pattern first.', steps: ['Restate problem', 'Clarify constraints', 'Try brute force', 'Identify pattern', 'Analyze complexity', 'Code cleanly', 'Test edge cases'], pseudocode: ['understand()', 'brute = simple_solution()', 'pattern = match_constraints()', 'optimize(pattern)', 'test([empty, one, duplicates, extremes])'] }, approaches: [{ name: 'Pattern drilling', whenToUse: 'Building recognition.', tradeoff: 'Must avoid memorizing only.' }, { name: 'Timed mocks', whenToUse: 'Interview readiness.', tradeoff: 'Stressful but necessary.' }, { name: 'Post-solve review', whenToUse: 'After every practice.', tradeoff: 'Slower but creates durable learning.' }], commonMistakes: [{ mistake: 'Memorizing solutions.', avoid: 'Explain invariant and why it works.' }, { mistake: 'Skipping brute force.', avoid: 'Start simple to reveal structure.' }, { mistake: 'Not testing edge cases.', avoid: 'Always test empty, one, duplicates, negatives, limits.' }], workedExample: { problem: 'Find two numbers that sum to target.', approach: 'Hash map one-pass.', why: 'Need O(n), each new number asks whether complement was seen.', steps: ['For each x compute target-x', 'Check map', 'If found return pair', 'Else store x'] }, practice: [{ level: 'Easy', prompt: 'What is O(n²) example?', hint: 'Nested loops over same list.' }, { level: 'Medium', prompt: 'When use sliding window?', hint: 'Contiguous subarray/substring with maintainable condition.' }, { level: 'Hard', prompt: 'Explain DP to a beginner and developer.', hint: 'Cache repeated subproblems; define state and transition.' }], quiz: [{ question: 'What should you do before optimizing?', options: ['Clarify and propose brute force', 'Start typing randomly', 'Ignore constraints', 'Skip tests'], answer: 0, explanation: 'Brute force establishes correctness and reveals optimization opportunities.' }], references: [{ label: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' }],
  },
  {
    id: 'behavioral-star', module: 'FAANG Interview Prep', title: 'Behavioral interviews: STAR stories for technical candidates', difficulty: 'Foundation', duration: '75 min', sourceFocus: ['FAANG interview readiness'], whyItMatters: 'Strong technical candidates still fail if they cannot communicate ownership, judgment, and impact.', dumbExplanation: 'Behavioral interviews ask: what did you do, why did it matter, and how did you handle difficulty?', developerExplanation: 'Use STAR: Situation, Task, Action, Result. Prepare stories showing leadership principles: ownership, ambiguity, conflict, technical depth, customer impact, failure recovery, and learning.', jargon: [{ term: 'STAR', meaning: 'Situation, Task, Action, Result.', useCase: 'Structure interview stories.' }, { term: 'Impact', meaning: 'Measurable outcome from your work.', useCase: 'Latency reduced 40%, cost reduced $10k/month.' }, { term: 'Ownership', meaning: 'Taking responsibility beyond assigned tasks.', useCase: 'Debugged production issue end to end.' }, { term: 'Tradeoff', meaning: 'A choice with pros and cons.', useCase: 'Ship simple solution now vs scalable solution later.' }], algorithm: { name: 'STAR story builder', intuition: 'Turn messy experience into a clear evidence-based story.', steps: ['Pick story theme', 'Write situation in one sentence', 'State your task', 'List actions you personally took', 'Quantify result', 'Add lesson learned'], pseudocode: ['story = {situation, task, actions, result, reflection}', 'ensure actions use I, not only we', 'ensure result is measurable'] }, approaches: [{ name: 'Prepared story bank', whenToUse: 'Before interviews.', tradeoff: 'Needs honest practice, not scripted robotic answers.' }, { name: 'Mock interview', whenToUse: 'Readiness check.', tradeoff: 'Uncomfortable but reveals gaps.' }, { name: 'Reflection journal', whenToUse: 'While building projects.', tradeoff: 'Requires consistency.' }], commonMistakes: [{ mistake: 'Saying only we.', avoid: 'Explain your personal contribution.' }, { mistake: 'No measurable result.', avoid: 'Quantify speed, quality, cost, users, reliability, learning.' }, { mistake: 'Blaming teammates.', avoid: 'Show accountability and constructive conflict handling.' }], workedExample: { problem: 'Tell me about a time you handled ambiguity.', approach: 'Use a project where requirements were unclear.', why: 'FAANG values structured thinking in uncertain situations.', steps: ['State unclear goal', 'Explain how you gathered constraints', 'Describe options/tradeoffs', 'Say what you shipped', 'Measure outcome'] }, practice: [{ level: 'Easy', prompt: 'Write one STAR story about learning a hard topic.', hint: 'Situation, Task, Action, Result.' }, { level: 'Medium', prompt: 'Convert a project into impact metrics.', hint: 'Time saved, errors reduced, users helped.' }, { level: 'Hard', prompt: 'Prepare a conflict story without blaming anyone.', hint: 'Focus on communication, evidence, compromise, outcome.' }], quiz: [{ question: 'In STAR, what should Action emphasize?', options: ['Your personal actions', 'Only the company history', 'Random code syntax', 'No details'], answer: 0, explanation: 'Interviewers need evidence of what you personally did.' }], references: [{ label: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' }],
  },

]
