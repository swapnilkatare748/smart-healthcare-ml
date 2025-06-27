const ort = require('onnxruntime-node');
const fs = require('fs');
const csv = require('fast-csv');

let session;

// Load the ONNX model when the server starts
async function loadModel() {
    session = await ort.InferenceSession.create("brain_tumor_model.onnx");
    console.log("ONNX Model Loaded Successfully!");
}

// Read and preprocess CSV data
async function loadData(csvPath) {
    return new Promise((resolve, reject) => {
        const data = [];
        fs.createReadStream(csvPath)
            .pipe(csv.parse({ headers: true }))
            .on('data', (row) => {
                const values = Object.values(row).map(Number);
                data.push(values);
            })
            .on('end', () => resolve(data))
            .on('error', (error) => reject(error));
    });
}

// Prediction function
async function predict(req, res) {
    try {
        if (!session) {
            return res.status(500).json({ error: "Model not loaded." });
        }

        // Get uploaded CSV file
        const filePath = req.file.path;
        const rawData = await loadData(filePath);
        const inputTensor = new ort.Tensor("float32", rawData.flat(), [rawData.length, rawData[0].length]);

        // Run ONNX inference
        const results = await session.run({ input: inputTensor });

        // Extract predictions
        const predictions = results.output.data;

        res.json({ predictions });

        // Clean up
        fs.unlinkSync(filePath);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Export functions
module.exports = { loadModel, predict };
