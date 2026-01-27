import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  Lock, LogOut, Users, Mail, FileText, Plus, Trash2, Edit, Save, X,
  Eye, EyeOff, Settings, LayoutDashboard, MessageSquare, Newspaper
} from 'lucide-react';

const API_URL = process.env.REACT_APP_BACKEND_URL;

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Data states
  const [submissions, setSubmissions] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [contentBlocks, setContentBlocks] = useState([]);
  
  // Edit states
  const [editingBlock, setEditingBlock] = useState(null);
  const [newBlock, setNewBlock] = useState(null);

  // Check if already authenticated
  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth) {
      setIsAuthenticated(true);
      fetchDashboardData(auth);
    }
  }, []);

  const getAuthHeader = () => {
    const auth = localStorage.getItem('adminAuth');
    return { 'Authorization': `Basic ${auth}` };
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const auth = btoa(`${username}:${password}`);
      const response = await fetch(`${API_URL}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`
        }
      });
      
      if (response.ok) {
        localStorage.setItem('adminAuth', auth);
        setIsAuthenticated(true);
        fetchDashboardData(auth);
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    setSubmissions([]);
    setSubscribers([]);
    setContentBlocks([]);
  };

  const fetchDashboardData = async (auth) => {
    const headers = { 'Authorization': `Basic ${auth}` };
    
    try {
      const [subResponse, newsResponse, contentResponse] = await Promise.all([
        fetch(`${API_URL}/api/admin/submissions`, { headers }),
        fetch(`${API_URL}/api/admin/subscribers`, { headers }),
        fetch(`${API_URL}/api/admin/content`, { headers })
      ]);
      
      if (subResponse.ok) setSubmissions(await subResponse.json());
      if (newsResponse.ok) setSubscribers(await newsResponse.json());
      if (contentResponse.ok) setContentBlocks(await contentResponse.json());
    } catch (err) {
      console.error('Failed to fetch data:', err);
    }
  };

  const handleCreateBlock = async () => {
    if (!newBlock?.page || !newBlock?.section) return;
    
    try {
      const response = await fetch(`${API_URL}/api/admin/content`, {
        method: 'POST',
        headers: {
          ...getAuthHeader(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBlock)
      });
      
      if (response.ok) {
        const created = await response.json();
        setContentBlocks([...contentBlocks, created]);
        setNewBlock(null);
      }
    } catch (err) {
      console.error('Failed to create block:', err);
    }
  };

  const handleUpdateBlock = async (blockId) => {
    if (!editingBlock) return;
    
    try {
      const response = await fetch(`${API_URL}/api/admin/content/${blockId}`, {
        method: 'PUT',
        headers: {
          ...getAuthHeader(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editingBlock)
      });
      
      if (response.ok) {
        const updated = await response.json();
        setContentBlocks(contentBlocks.map(b => b.id === blockId ? updated : b));
        setEditingBlock(null);
      }
    } catch (err) {
      console.error('Failed to update block:', err);
    }
  };

  const handleDeleteBlock = async (blockId) => {
    if (!window.confirm('Are you sure you want to delete this content block?')) return;
    
    try {
      const response = await fetch(`${API_URL}/api/admin/content/${blockId}`, {
        method: 'DELETE',
        headers: getAuthHeader()
      });
      
      if (response.ok) {
        setContentBlocks(contentBlocks.filter(b => b.id !== blockId));
      }
    } catch (err) {
      console.error('Failed to delete block:', err);
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <>
        <Helmet>
          <title>Admin Login | Lionforce</title>
        </Helmet>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-600 to-green-600 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-full mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
              <p className="text-gray-600 text-sm mt-2">Enter your credentials to access the dashboard</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter username"
                  required
                  data-testid="admin-username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Enter password"
                  required
                  data-testid="admin-password"
                />
              </div>
              
              {error && (
                <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                data-testid="admin-login-btn"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
            
            <p className="text-center text-gray-500 text-xs mt-6">
              Default: admin / lionforce2024
            </p>
          </motion.div>
        </div>
      </>
    );
  }

  // Admin Dashboard
  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Lionforce</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-green-500 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-gray-900">Lionforce Admin</h1>
                <p className="text-xs text-gray-500">Content Management System</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
              data-testid="admin-logout-btn"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'submissions', label: 'Contact Forms', icon: MessageSquare },
              { id: 'subscribers', label: 'Newsletter', icon: Newspaper },
              { id: 'content', label: 'Content Blocks', icon: FileText }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                data-testid={`admin-tab-${tab.id}`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Contact Forms</p>
                    <p className="text-3xl font-bold text-gray-900">{submissions.length}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Newsletter Subscribers</p>
                    <p className="text-3xl font-bold text-gray-900">{subscribers.length}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Content Blocks</p>
                    <p className="text-3xl font-bold text-gray-900">{contentBlocks.length}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Forms Tab */}
          {activeTab === 'submissions' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-bold text-gray-900">Contact Form Submissions</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Service</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Message</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {submissions.map((sub, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">{sub.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{sub.email}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{sub.service || '-'}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 max-w-xs truncate">{sub.message || '-'}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{new Date(sub.timestamp).toLocaleDateString()}</td>
                      </tr>
                    ))}
                    {submissions.length === 0 && (
                      <tr>
                        <td colSpan="5" className="px-4 py-8 text-center text-gray-500">No submissions yet</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Newsletter Tab */}
          {activeTab === 'subscribers' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-bold text-gray-900">Newsletter Subscribers</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Email</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Subscribed On</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {subscribers.map((sub, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">{sub.email}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{new Date(sub.timestamp).toLocaleDateString()}</td>
                      </tr>
                    ))}
                    {subscribers.length === 0 && (
                      <tr>
                        <td colSpan="2" className="px-4 py-8 text-center text-gray-500">No subscribers yet</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Content Blocks Tab */}
          {activeTab === 'content' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-gray-900">Content Blocks</h2>
                <button
                  onClick={() => setNewBlock({ page: '', section: '', title: '', content: '', order: 0, is_active: true })}
                  className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-teal-700 transition-colors"
                  data-testid="add-content-block-btn"
                >
                  <Plus className="w-4 h-4" />
                  Add Block
                </button>
              </div>

              {/* New Block Form */}
              {newBlock && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-6 rounded-xl shadow-sm border-2 border-teal-500"
                >
                  <h3 className="font-bold mb-4">Create New Content Block</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Page (e.g., home, about)"
                      value={newBlock.page}
                      onChange={(e) => setNewBlock({ ...newBlock, page: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Section (e.g., hero, services)"
                      value={newBlock.section}
                      onChange={(e) => setNewBlock({ ...newBlock, section: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Title"
                      value={newBlock.title || ''}
                      onChange={(e) => setNewBlock({ ...newBlock, title: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Order"
                      value={newBlock.order}
                      onChange={(e) => setNewBlock({ ...newBlock, order: parseInt(e.target.value) || 0 })}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                  <textarea
                    placeholder="Content"
                    value={newBlock.content || ''}
                    onChange={(e) => setNewBlock({ ...newBlock, content: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm mb-4"
                    rows={3}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleCreateBlock}
                      className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700"
                    >
                      <Save className="w-4 h-4" />
                      Save
                    </button>
                    <button
                      onClick={() => setNewBlock(null)}
                      className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300"
                    >
                      <X className="w-4 h-4" />
                      Cancel
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Content Blocks List */}
              <div className="grid gap-4">
                {contentBlocks.map((block) => (
                  <div key={block.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    {editingBlock?.id === block.id ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            value={editingBlock.title || ''}
                            onChange={(e) => setEditingBlock({ ...editingBlock, title: e.target.value })}
                            className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                            placeholder="Title"
                          />
                          <input
                            type="number"
                            value={editingBlock.order || 0}
                            onChange={(e) => setEditingBlock({ ...editingBlock, order: parseInt(e.target.value) || 0 })}
                            className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                            placeholder="Order"
                          />
                        </div>
                        <textarea
                          value={editingBlock.content || ''}
                          onChange={(e) => setEditingBlock({ ...editingBlock, content: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                          rows={3}
                          placeholder="Content"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleUpdateBlock(block.id)}
                            className="flex items-center gap-2 bg-teal-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium"
                          >
                            <Save className="w-4 h-4" />
                            Save
                          </button>
                          <button
                            onClick={() => setEditingBlock(null)}
                            className="flex items-center gap-2 bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium"
                          >
                            <X className="w-4 h-4" />
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 bg-teal-100 text-teal-700 rounded text-xs font-medium">{block.page}</span>
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs font-medium">{block.section}</span>
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">#{block.order}</span>
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${block.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                              {block.is_active ? 'Active' : 'Inactive'}
                            </span>
                          </div>
                          <h3 className="font-semibold text-gray-900">{block.title || 'Untitled'}</h3>
                          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{block.content || 'No content'}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setEditingBlock(block)}
                            className="p-2 text-gray-500 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteBlock(block.id)}
                            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                {contentBlocks.length === 0 && (
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center text-gray-500">
                    No content blocks yet. Click "Add Block" to create one.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Admin;
