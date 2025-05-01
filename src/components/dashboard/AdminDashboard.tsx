import { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../common/PostCard';
import { Post } from '../../types/types';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingPostId, setEditingPostId] = useState<string | null>(null);

  const navigate=useNavigate();


  const fetchPosts = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const response = await axios.get('https://liaplusai-backend-3.onrender.com/posts', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(response.data);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);


  const handleCreatePost = async () => {
    if (title.trim() === '' || content.trim() === '') {
      alert('Please enter both title and content!');
      return;
    }

    const token = localStorage.getItem('token');
    if (token) {
      await axios.post(
        'https://liaplusai-backend-3.onrender.com/posts',
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTitle('');
      setContent('');
      fetchPosts();
    }
  };

  const handleDeletePost = async (postId: string) => {
    const token = localStorage.getItem('token');
    if (token) {
      await axios.delete(`https://liaplusai-backend-3.onrender.com/posts/${postId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchPosts();
    }
  };

  const handleUpdatePost = (post: Post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditingPostId(post._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveUpdate = async () => {
    const token = localStorage.getItem('token');
    if (token && editingPostId) {
      await axios.patch(`https://liaplusai-backend-3.onrender.com/posts/${editingPostId}`,
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setTitle('');
      setContent('');
      setEditingPostId(null);
      fetchPosts();
    }
  };

  const handleLogout=()=>{
     localStorage.removeItem('token');
     navigate('/')
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
      <div className="add-post-form">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          className="form-input"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post Content"
          className="form-textarea"
        />
        <button
          onClick={editingPostId ? handleSaveUpdate : handleCreatePost}
          className="create-button"
        >
          {editingPostId ? 'Save Update' : 'Create Post'}
        </button>
      </div>



      <h2 className="posts-heading">All Posts</h2>

      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <PostCard {...post} />
            <div className="post-actions">
              <button onClick={() => handleUpdatePost(post)} className="update-button">Update</button>
              <button onClick={() => handleDeletePost(post._id)} className="delete-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
