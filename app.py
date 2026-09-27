from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/masters')
def masters():
    return render_template('masters.html')

@app.route('/prices')
def prices():
    return render_template('prices.html')

@app.route('/prices/hair')
def price_hair():
    return render_template('price_hair.html')

@app.route('/prices/nails')
def price_nails():
    return render_template('price_nails.html')

@app.route('/prices/cosmetology')
def price_cosmetology():
    return render_template('price_cosmetology.html')

@app.route('/prices/massage')
def price_massage():
    return render_template('price_massage.html')

@app.route('/prices/lashes')
def price_lashes():
    return render_template('price_lashes.html')

@app.route('/prices/laser')
def price_laser():
    return render_template('price_laser.html')

@app.route('/promo')
def promo():
    return render_template('promo.html')

@app.route('/contacts')
def contacts():
    return render_template('contacts.html')

if __name__ == '__main__':
    app.run(debug=True)