export const lineChartData = {
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ],

    datasets: [
        {
            label: "Steps By Diora",
            data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
            borderColor: "rgb(75,192, 192)",
        },
        {
            label: "Steps By Dimsum",
            data: [3000, 5000, 7500, 2000, 11000, 1000, 9000],
            borderColor: "red",
        },
    ],
};


export const barChartData = {
    labels: [
        "Rent", "Groceries", "Utilities", "Entertainment", "Transportation"
    ],
    datasets: [
        {
            label: " Expenses",
            data: [1900, 1300, 1650, 1180, 1100],
            backgroundColor: [
                "rgba(255, 182, 193, 0.3)",  // Light Pink
                "rgba(255, 223, 186, 0.3)",  // Peach
                "rgba(255, 255, 153, 0.3)",  // Soft Yellow
                "rgba(144, 238, 144, 0.3)",  // Light Green
                "rgba(216, 191, 216, 0.3)",  // Thistle (Soft Violet)
            ],
            borderColor: [
                "rgba(255, 105, 180, 1)",  // Hot Pink
                "rgba(255, 140, 0, 1)",    // Dark Orange
                "rgba(255, 215, 0, 1)",    // Gold
                "rgba(34, 139, 34, 1)",    // Forest Green
                "rgba(148, 0, 211, 1)",    // Dark Violet
            ],

            borderWidth: 5,
        },
    ],
};

export const pieChartData = {
    labels: ["Facebook", "Instagram", "Twitter", "YouTube", "LinkedIn"],
    datasets: [
        {
            label: "Time Spent",
            data: [120, 60, 30, 90, 45],
            backgroundColor: [
                "rgba(255, 255, 0, 1)", // Yellow
                "rgba(0, 255, 255, 1)", // Cyan
                "rgba(255, 0, 255, 1)", // Magenta
                "rgba(165, 42, 42, 1)", // Brown
                "rgba(255, 192, 203, 1)" // Pink
            ],
            hoverOffset: 7,

        }
    ]
}
