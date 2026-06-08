// Ядро DPM: Интеграция 5 слоев и логика корреляций
const motivationLayers = {
    behavior: [1, 2, 10],
    motivation: [3, 4, 7],
    leadership: [5, 8, 9],
    psychology: [11, 12, 13],
    demographics: [30, 39]
};

// Матрица корреляций (упрощенная модель связей из PDF)
const correlations = {
    poll3: { discipline: 0.42, performance: 0.28 },
    poll4: { discipline: -0.15, performance: 0.65 }
};

function calculateImpact(p3, p4) {
    let discipline = (p3 * correlations.poll3.discipline) + (p4 * correlations.poll4.discipline);
    let performance = (p3 * correlations.poll3.performance) + (p4 * correlations.poll4.performance);
    return { discipline: discipline.toFixed(2), performance: performance.toFixed(2) };
}