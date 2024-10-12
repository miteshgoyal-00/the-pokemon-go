// Save the original console.log function
const originalConsoleLog = console.log;

// Override console.log
console.log = function (...args) {
    // Capture the stack trace
    const stack = new Error().stack;
    const stackLines = stack.split("\n");

    // Extract the file name and line number from the stack trace
    // The caller line is usually the third line
    let callerLine = stackLines[2];
    if (callerLine.includes("at ")) {
        // Remove 'at ' prefix
        callerLine = callerLine.trim().substring(3);
    }

    const match = callerLine.match(/(.*):(\d+):\d+/);
    let fileName = "unknown";
    let lineNumber = "unknown";

    if (match) {
        fileName = match[1].split("/").pop();
        lineNumber = match[2];
    }

    originalConsoleLog('-------------------------');
    originalConsoleLog(`[${fileName}] (${lineNumber})`, ...args);
};
