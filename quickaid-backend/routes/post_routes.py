# routes/post_routes.py

from flask import Blueprint, request, jsonify
from models.post_model import Post

post_routes = Blueprint('post_routes', __name__)

# GET all help posts
@post_routes.route('/posts', methods=['GET'])
def get_posts():
    posts = Post.get_all_posts()
    return jsonify(posts), 200

# POST a new help post
@post_routes.route('/posts', methods=['POST'])
def create_post():
    data = request.json
    required_fields = ['title', 'description', 'category', 'location', 'type']

    # Validate input
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

# DELETE a post by ID
@post_routes.route('/posts/<int:post_id>', methods=['DELETE'])
def delete_post(post_id):
    deleted = Post.delete_post(post_id)
    if deleted:
        return jsonify({'message': f'Post {post_id} deleted successfully'}), 200
    else:
        return jsonify({'error': 'Post not found'}), 404

# PUT - Update an existing post
@post_routes.route('/posts/<int:post_id>', methods=['PUT'])
def update_post(post_id):
    data = request.json
    if not data:
        return jsonify({'error': 'No data provided'}), 400

    success = Post.update_post(post_id, data)
    if success:
        return jsonify({'message': 'Post updated successfully'}), 200
    else:
        return jsonify({'error': 'Post not found or no fields to update'}), 404


