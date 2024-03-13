from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from typing import Dict  # Add this line

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/report', methods=['POST'])
def report():
    data: Dict[str, str] = request.get_json()
    # Process and store the report data (e.g., location, timestamp)
    # You can save the data to a database or a file.

    return jsonify({'message': 'Report received successfully!'})

if __name__ == '__main__':
    app.run(debug=True)
