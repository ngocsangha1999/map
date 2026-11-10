from flask import Flask, render_template, request,session,jsonify,render_template_string,redirect


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
# Trang chủ mobile đã bỏ, giữ đường dẫn cũ và chuyển thẳng sang bản đồ
@app.route('/mobile.html', methods=['GET'])
def mobile():
    return redirect('/map_mobile.html', code=301)

@app.route('/map_mobile.html', methods=['GET'])
def map_mobile():
    return render_template('./map_mobile.html')
@app.route('/thuyet_minh_mobile.html', methods=['GET'])
def thuyet_minh_mobile():
    return render_template('./thuyet_minh_mobile.html')

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
