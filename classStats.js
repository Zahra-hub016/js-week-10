function getClassStats(grades) {
    let highest = grades[0];
    let lowest = grades[0];
    let total = 0;

    // مرور نمرات با یک حلقه for...of
    for (const grade of grades) {
        if (grade > highest) {
            highest = grade;
        }

        if (grade < lowest) {
            lowest = grade;
        }

        total += grade;
    }

    const average = total / grades.length;

    return {
        highest: highest,
        lowest: lowest,
        average: average
    };
}

// Test
const grades = [88, 95, 72, 91, 65];

const result = getClassStats(grades);

console.log(result);