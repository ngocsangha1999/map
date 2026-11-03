from flask import Flask, render_template, request,session,jsonify,render_template_string


app = Flask(__name__, static_folder='static', template_folder='templates')
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

@app.route('/', methods=['GET'])
def index():
    return render_template('./index.html')

@app.route('/map.html', methods=['GET'])
def map():
    return render_template('./map.html')

@app.route('/a1.html', methods=['GET'])
def a1():
    return render_template('./a1.html')
    
@app.route('/a2.html', methods=['GET'])
def a2():
    return render_template('./a2.html')

@app.route('/a3.html', methods=['GET'])
def a3():
    return render_template('./a3.html')

@app.route('/vpmc.html', methods=['GET'])
def vpmc():
    return render_template('./vpmc.html')

# Trang con Mobile
@app.route('/mobile.html', methods=['GET'])
def mobile():
    return render_template('./mobile.html')

@app.route('/map_mobile.html', methods=['GET'])
def map_mobile():
    return render_template('./map_mobile.html')
@app.route('/a1_mobile.html', methods=['GET'])
def a1_mobile():
    return render_template('./a1_mobile.html')

@app.route('/a2_mobile.html', methods=['GET'])
def a2_mobile():
    return render_template('./a2_mobile.html')

@app.route('/a3_mobile.html', methods=['GET'])
def a3_mobile():
    return render_template('./a3_mobile.html')

@app.route('/vpmc_mobile.html', methods=['GET'])
def vpmc_mobile():
    return render_template('./vpmc_mobile.html')
    
if __name__ == '__main__':
    app.run('0.0.0.0',debug='true')
