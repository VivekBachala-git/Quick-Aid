from db_config import get_connection

# This represents a single help post in the app
class Post:
    def __init__(self, id, title, description, category, location, type, created_at=None):
        self.id = id
        self.title = title
        self.description = description
        self.category = category
        self.location = location
        self.type = type  # "request" or "offer"
        self.created_at = created_at

    @staticmethod
    def create_post(title, description, category, location, type):
        conn = get_connection()
        cursor = conn.cursor()

        sql = """
            INSERT INTO posts (title, description, category, location, type, status, created_at)
            VALUES (%s, %s, %s, %s, %s, %s, NOW())
        """
        values = (title, description, category, location, type, 'active')
        cursor.execute(sql, values)
        conn.commit()

        post_id = cursor.lastrowid
        cursor.close()
        conn.close()
        return post_id

    @staticmethod
    def get_all_posts():
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)

        cursor.execute("SELECT * FROM posts ORDER BY created_at DESC")
        rows = cursor.fetchall()

        cursor.close()
        conn.close()
        return rows

    @staticmethod
    def get_post_by_id(post_id):
        conn = get_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM posts WHERE id = %s", (post_id,))
        post = cursor.fetchone()
        cursor.close()
        conn.close()
        return post

    @staticmethod
    def update_post(post_id, data):
        conn = get_connection()
        cursor = conn.cursor()

        allowed_fields = ['title', 'description', 'category', 'location', 'type', 'status']
        allowed_status_values = ['active', 'completed']

        fields = []
        values = []

        for field in allowed_fields:
            if field in data:
                if field == 'status' and data[field] not in allowed_status_values:
                    return False
                fields.append(f"{field} = %s")
                values.append(data[field])

        if not fields:
            return False  # Nothing to update

        values.append(post_id)

        query = f"UPDATE posts SET {', '.join(fields)} WHERE id = %s"
        cursor.execute(query, tuple(values))
        conn.commit()
        updated = cursor.rowcount
        cursor.close()
        conn.close()

        return updated > 0

    @staticmethod
    def delete_post(post_id):
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM posts WHERE id = %s", (post_id,))
        conn.commit()
        deleted = cursor.rowcount
        cursor.close()
        conn.close()
        return deleted > 0
    
    @staticmethod
    def update_post(post_id, data):
        conn = get_connection()
        cursor = conn.cursor()

        allowed_fields = ['title', 'description', 'category', 'location', 'type', 'status']
        allowed_status_values = ['active', 'completed']

        fields = []
        values = []

        for field in allowed_fields:
            if field in data:
                if field == 'status' and data[field] not in allowed_status_values:
                    continue  # skip invalid status
                fields.append(f"{field} = %s")
                values.append(data[field])

        if not fields:
            return False

        values.append(post_id)
        query = f"UPDATE posts SET {', '.join(fields)} WHERE id = %s"
        cursor.execute(query, tuple(values))
        conn.commit()
        updated = cursor.rowcount
        conn.close()

        return updated > 0


