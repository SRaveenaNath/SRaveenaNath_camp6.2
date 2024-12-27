function display(value: number | string): void {
    if (typeof value === "number") {
        console.log("The given value is of type number.");
    } else if (typeof value === "string") {
        console.log("The given value is of type string.");
    }
}

// Test cases
display(123);    // Logs: The given value is of type number.
display("ABC");  // Logs: The given value is of type string.
