class GenericPerformanceTest {
    static measure(fn, input, iterations = 1000) {
      const start = process.hrtime();
      
      for (let i = 0; i < iterations; i++) {
        fn(...input);
      }
      
      const end = process.hrtime(start);
      return {
        iterations,
        timeNs: end[0] * 1e9 + end[1],
        timeMs: (end[0] * 1e9 + end[1]) / 1e6
      };
    }
    
    static comparePerformance(fns, input, iterations = 1000) {
      return fns.map(fn => ({
        name: fn.name,
        ...this.measure(fn, input, iterations)
      }));
    }
  }
  
  module.exports = GenericPerformanceTest;