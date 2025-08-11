from flask import Flask, request, jsonify
from flask_cors import CORS
from models.post_model import Post
from routes.post_routes import post_routes

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

# Home route (just to check server is running)
@app.route('/')
def home():
    return "🚀 QuickAid backend is running!"


# -----------------------
#  POSTS REST API ROUTES
# -----------------------

# Get all posts
@app.route('/api/posts', methods=['GET'])
def get_posts():
    posts = Post.get_all_posts()
    return jsonify(posts), 200


# Create a new post
@app.route('/api/posts', methods=['POST'])
def create_post():
    data = request.json
    required_fields = ['title', 'description', 'category', 'location', 'type']

    if not all(field in data and data[field] for field in required_fields):
        return jsonify({'error': 'Missing required fields'}), 400

    post_id = Post.create_post(
        data['title'],
        data['description'],
        data['category'],
        data['location'],
        data['type']
    )
    return jsonify({'message': 'Post created', 'id': post_id}), 201


# Get a single post by ID
@app.route('/api/posts/<int:post_id>', methods=['GET'])
def get_post_by_id(post_id):
    post = Post.get_post_by_id(post_id)
    if post:
        return jsonify(post), 200
    else:
        return jsonify({'error': 'Post not found'}), 404


# Update a post
@app.route('/api/posts/<int:post_id>', methods=['PUT'])
def update_post(post_id):
    data = request.json
    updated = Post.update_post(post_id, data)

    if updated:
        return jsonify({'message': 'Post updated successfully'}), 200
    else:
        return jsonify({'error': 'Post not found or no changes provided'}), 404


# Optional: Register any extra blueprints (make sure they use /api as prefix too)
app.register_blueprint(post_routes)


# Run the app
if __name__ == '__main__':
    app.run(debug=True)
