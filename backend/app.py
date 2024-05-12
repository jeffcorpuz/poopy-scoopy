# app.py
from flask import Flask, request, send_file
from PIL import Image
from io import BytesIO
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/flip-photo', methods=['POST'])
def flip_photo():
    file = request.files['file']
    img = Image.open(file)
    flipped_img = img.transpose(Image.FLIP_LEFT_RIGHT)

    img_io = BytesIO()
    flipped_img.save(img_io, 'JPEG')
    img_io.seek(0)

    return send_file(img_io, mimetype='image/jpeg')

if __name__ == '__main__':
    app.run(debug=True)
