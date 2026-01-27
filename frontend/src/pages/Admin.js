import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  Lock, LogOut, FileText, Plus, Trash2, Edit, Save, X,
  Settings, LayoutDashboard, MessageSquare, Newspaper,
  Home, Info, Phone, Globe, BookOpen, Code, Image, Type,
  ChevronDown, ChevronRight, Eye, GripVertical
} from 'lucide-react';

const API_URL = process.env.REACT_APP_BACKEND_URL;

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [saveStatus, setSaveStatus] = useState('');
  
  // Data states
  const [submissions, setSubmissions] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [siteContent, setSiteContent] = useState({});
  const [selectedPage, setSelectedPage] = useState('home');
  const [expandedSections, setExpandedSections] = useState({});

  // Default site content structure
  const defaultContent = {
    home: {
      hero: {
        badge: 'Transforming Businesses Since 2012',
        title1: 'Innovate.',
        title2: 'Scale.',
        title3: 'Transform.',
        subtitle: 'Custom eLearning that sticks. Software that scales. From concept to launch - we build what others can\'t.',
        stats: { years: '13+', projects: '300+', countries: '32+' }
      },
      services: {
        title: 'What We Build',
        subtitle: 'From learning experiences to software solutions - we craft digital products that make a difference.'
      },
      whyUs: {
        title: 'Why Teams Choose Us',
        subtitle: 'We don\'t just deliver projects - we build partnerships that last.',
        items: [
          { number: '01', title: '100% Certified Talent', desc: 'Experience the difference of working with professionals who are meticulously vetted.' },
          { number: '02', title: 'Team Scalability', desc: 'Effortlessly adjust your development team to align with your evolving roadmap.' },
          { number: '03', title: 'Save up to 40%', desc: 'Accelerate your project launch with premium quality at smart pricing.' },
          { number: '04', title: 'Kick off in 5 Days', desc: 'Ditch the lengthy hiring hassles and launch your team quickly.' },
          { number: '05', title: 'All Tech Under One Roof', desc: 'Our skilled team excels across major tech platforms.' },
          { number: '06', title: 'Lionforce Excellence', desc: 'Quality and high standards are in our DNA.' }
        ]
      }
    },
    about: {
      hero: {
        tagline: 'Our Story',
        title1: 'Fueling Success',
        title2: 'Through Innovation',
        subtitle: 'Since 2012, we\'ve been transforming how businesses learn, build, and grow.'
      },
      ceo: {
        title: 'From Our CEO',
        quote: 'The success of any project is rooted in the strength of its people.',
        message: 'Our deliberate growth strategy allows us to handpick the right talent, fostering a vibrant culture.',
        name: 'Praveen Kamalan',
        role: 'Founder & CEO'
      },
      mission: 'Empower organizations worldwide with innovative learning and software solutions that drive measurable outcomes.',
      vision: 'Be the global leader in AI-powered eLearning and software - and the trusted partner for businesses expanding to India.'
    },
    contact: {
      hero: {
        title1: 'Let\'s Build',
        title2: 'Something Amazing',
        subtitle: 'Have a project in mind? We\'d love to hear about it.',
        phone: '+91 96005 36354',
        email: 'hello@lionforce.net'
      },
      form: {
        title: 'Ready to Start?',
        subtitle: 'Fill out the form and our team will get back to you within 24 hours.'
      }
    },
    global: {
      phone: '+91 96005 36354',
      email: 'hello@lionforce.net',
      company: 'Lionforce Technologies Pvt Ltd',
      location: 'Chennai, India'
    }
  };

  const pages = [
    { id: 'home', name: 'Home Page', icon: <Home className="w-4 h-4" /> },
    { id: 'about', name: 'About Page', icon: <Info className="w-4 h-4" /> },
    { id: 'contact', name: 'Contact Page', icon: <Phone className="w-4 h-4" /> },
    { id: 'global', name: 'Global Settings', icon: <Settings className="w-4 h-4" /> }
  ];

  const getAuthHeader = () => {
    const auth = localStorage.getItem('adminAuth');
    return { 'Authorization': `Basic ${auth}` };
  };

  const fetchDashboardData = async (authToken) => {
    const headers = { 'Authorization': `Basic ${authToken}` };
    
    try {
      const [subResponse, newsResponse, contentResponse] = await Promise.all([
        fetch(`${API_URL}/api/admin/submissions`, { headers }),
        fetch(`${API_URL}/api/admin/subscribers`, { headers }),
        fetch(`${API_URL}/api/admin/site-content`, { headers })
      ]);
      
      if (subResponse.ok) setSubmissions(await subResponse.json());
      if (newsResponse.ok) setSubscribers(await newsResponse.json());
      if (contentResponse.ok) {
        const content = await contentResponse.json();
        setSiteContent(content.content || defaultContent);
      } else {
        setSiteContent(defaultContent);
      }
    } catch (err) {
      console.error('Failed to fetch data:', err);
      setSiteContent(defaultContent);
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth) {
      setIsAuthenticated(true);
      fetchDashboardData(auth);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const auth = btoa(`${username}:${password}`);
      const response = await fetch(`${API_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Authorization': `Basic ${auth}` }
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
    setSiteContent({});
  };

  const handleContentChange = (page, section, field, value) => {
    setSiteContent(prev => ({
      ...prev,
      [page]: {
        ...prev[page],
        [section]: typeof prev[page]?.[section] === 'object' && !Array.isArray(prev[page]?.[section])
          ? { ...prev[page][section], [field]: value }
          : value
      }
    }));
  };

  const handleNestedChange = (page, section, index, field, value) => {
    setSiteContent(prev => {
      const items = [...(prev[page]?.[section]?.items || [])];
      items[index] = { ...items[index], [field]: value };
      return {
        ...prev,
        [page]: {
          ...prev[page],
          [section]: { ...prev[page][section], items }
        }
      };
    });
  };

  const saveContent = async () => {
    setSaveStatus('saving');
    try {
      const response = await fetch(`${API_URL}/api/admin/site-content`, {
        method: 'POST',
        headers: {
          ...getAuthHeader(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: siteContent })
      });
      
      if (response.ok) {
        setSaveStatus('saved');
        setTimeout(() => setSaveStatus(''), 3000);
      } else {
        setSaveStatus('error');
      }
    } catch (err) {
      setSaveStatus('error');
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const renderTextField = (label, value, onChange, multiline = false) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {multiline ? (
        <textarea
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      ) : (
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      )}
    </div>
  );

  const renderSection = (title, children, sectionKey) => (
    <div className="bg-white rounded-xl border border-gray-200 mb-4 overflow-hidden">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <span className="font-semibold text-gray-900">{title}</span>
        {expandedSections[sectionKey] ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </button>
      {expandedSections[sectionKey] && (
        <div className="p-4 border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );

  // Login Screen
  if (!isAuthenticated) {
    return (
      <>
        <Helmet><title>Admin Login | Lionforce</title></Helmet>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter password"
                  required
                  data-testid="admin-password"
                />
              </div>
              
              {error && (
                <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm">{error}</div>
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
      <Helmet><title>Admin Dashboard | Lionforce</title></Helmet>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-green-500 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-gray-900">Lionforce CMS</h1>
                <p className="text-xs text-gray-500">Content Management System</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {saveStatus && (
                <span className={`text-sm font-medium ${saveStatus === 'saved' ? 'text-green-600' : saveStatus === 'error' ? 'text-red-600' : 'text-gray-600'}`}>
                  {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'saved' ? 'Saved!' : 'Error saving'}
                </span>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                data-testid="admin-logout-btn"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'pages', label: 'Edit Pages', icon: FileText },
              { id: 'submissions', label: 'Contact Forms', icon: MessageSquare },
              { id: 'subscribers', label: 'Newsletter', icon: Newspaper }
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
            <div className="space-y-6">
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
                      <Newspaper className="w-6 h-6 text-green-600" />
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
                      <p className="text-gray-500 text-sm">Pages</p>
                      <p className="text-3xl font-bold text-gray-900">{pages.length}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="font-bold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button
                    onClick={() => { setActiveTab('pages'); setSelectedPage('home'); }}
                    className="p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all text-left"
                  >
                    <Home className="w-6 h-6 text-teal-600 mb-2" />
                    <p className="font-medium text-gray-900">Edit Home</p>
                    <p className="text-xs text-gray-500">Hero, Services, Why Us</p>
                  </button>
                  <button
                    onClick={() => { setActiveTab('pages'); setSelectedPage('about'); }}
                    className="p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all text-left"
                  >
                    <Info className="w-6 h-6 text-teal-600 mb-2" />
                    <p className="font-medium text-gray-900">Edit About</p>
                    <p className="text-xs text-gray-500">Story, CEO Message</p>
                  </button>
                  <button
                    onClick={() => { setActiveTab('pages'); setSelectedPage('contact'); }}
                    className="p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all text-left"
                  >
                    <Phone className="w-6 h-6 text-teal-600 mb-2" />
                    <p className="font-medium text-gray-900">Edit Contact</p>
                    <p className="text-xs text-gray-500">Form, Contact Info</p>
                  </button>
                  <button
                    onClick={() => { setActiveTab('pages'); setSelectedPage('global'); }}
                    className="p-4 rounded-lg border border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all text-left"
                  >
                    <Settings className="w-6 h-6 text-teal-600 mb-2" />
                    <p className="font-medium text-gray-900">Global Settings</p>
                    <p className="text-xs text-gray-500">Phone, Email, Address</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Edit Pages Tab */}
          {activeTab === 'pages' && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Page Selector Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-24">
                  <h3 className="font-semibold text-gray-900 mb-4">Select Page</h3>
                  <div className="space-y-2">
                    {pages.map(page => (
                      <button
                        key={page.id}
                        onClick={() => setSelectedPage(page.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all ${
                          selectedPage === page.id
                            ? 'bg-teal-600 text-white'
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        {page.icon}
                        <span className="font-medium">{page.name}</span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <button
                      onClick={saveContent}
                      disabled={saveStatus === 'saving'}
                      className="w-full bg-gradient-to-r from-teal-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      {saveStatus === 'saving' ? 'Saving...' : 'Save Changes'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Editor */}
              <div className="lg:col-span-3">
                {/* Home Page Editor */}
                {selectedPage === 'home' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">Edit Home Page</h2>
                      <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal-600 hover:underline">
                        <Eye className="w-4 h-4" /> Preview
                      </a>
                    </div>

                    {renderSection('Hero Section', (
                      <>
                        {renderTextField('Badge Text', siteContent.home?.hero?.badge, (v) => handleContentChange('home', 'hero', 'badge', v))}
                        {renderTextField('Title Line 1', siteContent.home?.hero?.title1, (v) => handleContentChange('home', 'hero', 'title1', v))}
                        {renderTextField('Title Line 2', siteContent.home?.hero?.title2, (v) => handleContentChange('home', 'hero', 'title2', v))}
                        {renderTextField('Title Line 3 (Gradient)', siteContent.home?.hero?.title3, (v) => handleContentChange('home', 'hero', 'title3', v))}
                        {renderTextField('Subtitle', siteContent.home?.hero?.subtitle, (v) => handleContentChange('home', 'hero', 'subtitle', v), true)}
                        <div className="grid grid-cols-3 gap-4">
                          {renderTextField('Years Stat', siteContent.home?.hero?.stats?.years, (v) => handleContentChange('home', 'hero', 'stats', {...siteContent.home?.hero?.stats, years: v}))}
                          {renderTextField('Projects Stat', siteContent.home?.hero?.stats?.projects, (v) => handleContentChange('home', 'hero', 'stats', {...siteContent.home?.hero?.stats, projects: v}))}
                          {renderTextField('Countries Stat', siteContent.home?.hero?.stats?.countries, (v) => handleContentChange('home', 'hero', 'stats', {...siteContent.home?.hero?.stats, countries: v}))}
                        </div>
                      </>
                    ), 'home-hero')}

                    {renderSection('Services Section', (
                      <>
                        {renderTextField('Section Title', siteContent.home?.services?.title, (v) => handleContentChange('home', 'services', 'title', v))}
                        {renderTextField('Section Subtitle', siteContent.home?.services?.subtitle, (v) => handleContentChange('home', 'services', 'subtitle', v), true)}
                      </>
                    ), 'home-services')}

                    {renderSection('Why Teams Choose Us', (
                      <>
                        {renderTextField('Section Title', siteContent.home?.whyUs?.title, (v) => handleContentChange('home', 'whyUs', 'title', v))}
                        {renderTextField('Section Subtitle', siteContent.home?.whyUs?.subtitle, (v) => handleContentChange('home', 'whyUs', 'subtitle', v), true)}
                        <div className="mt-4 space-y-4">
                          <p className="font-medium text-gray-700">Items:</p>
                          {(siteContent.home?.whyUs?.items || []).map((item, index) => (
                            <div key={index} className="p-4 bg-gray-50 rounded-lg">
                              <div className="grid grid-cols-2 gap-4">
                                {renderTextField(`Item ${index + 1} Number`, item.number, (v) => handleNestedChange('home', 'whyUs', index, 'number', v))}
                                {renderTextField(`Item ${index + 1} Title`, item.title, (v) => handleNestedChange('home', 'whyUs', index, 'title', v))}
                              </div>
                              {renderTextField(`Item ${index + 1} Description`, item.desc, (v) => handleNestedChange('home', 'whyUs', index, 'desc', v), true)}
                            </div>
                          ))}
                        </div>
                      </>
                    ), 'home-whyus')}
                  </div>
                )}

                {/* About Page Editor */}
                {selectedPage === 'about' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">Edit About Page</h2>
                      <a href="/about" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal-600 hover:underline">
                        <Eye className="w-4 h-4" /> Preview
                      </a>
                    </div>

                    {renderSection('Hero Section', (
                      <>
                        {renderTextField('Tagline', siteContent.about?.hero?.tagline, (v) => handleContentChange('about', 'hero', 'tagline', v))}
                        {renderTextField('Title Line 1', siteContent.about?.hero?.title1, (v) => handleContentChange('about', 'hero', 'title1', v))}
                        {renderTextField('Title Line 2', siteContent.about?.hero?.title2, (v) => handleContentChange('about', 'hero', 'title2', v))}
                        {renderTextField('Subtitle', siteContent.about?.hero?.subtitle, (v) => handleContentChange('about', 'hero', 'subtitle', v), true)}
                      </>
                    ), 'about-hero')}

                    {renderSection('CEO Message', (
                      <>
                        {renderTextField('Section Title', siteContent.about?.ceo?.title, (v) => handleContentChange('about', 'ceo', 'title', v))}
                        {renderTextField('Main Quote', siteContent.about?.ceo?.quote, (v) => handleContentChange('about', 'ceo', 'quote', v), true)}
                        {renderTextField('Message', siteContent.about?.ceo?.message, (v) => handleContentChange('about', 'ceo', 'message', v), true)}
                        {renderTextField('CEO Name', siteContent.about?.ceo?.name, (v) => handleContentChange('about', 'ceo', 'name', v))}
                        {renderTextField('CEO Role', siteContent.about?.ceo?.role, (v) => handleContentChange('about', 'ceo', 'role', v))}
                      </>
                    ), 'about-ceo')}

                    {renderSection('Mission & Vision', (
                      <>
                        {renderTextField('Mission Statement', siteContent.about?.mission, (v) => setSiteContent(prev => ({...prev, about: {...prev.about, mission: v}})), true)}
                        {renderTextField('Vision Statement', siteContent.about?.vision, (v) => setSiteContent(prev => ({...prev, about: {...prev.about, vision: v}})), true)}
                      </>
                    ), 'about-mission')}
                  </div>
                )}

                {/* Contact Page Editor */}
                {selectedPage === 'contact' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">Edit Contact Page</h2>
                      <a href="/contact" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal-600 hover:underline">
                        <Eye className="w-4 h-4" /> Preview
                      </a>
                    </div>

                    {renderSection('Hero Section', (
                      <>
                        {renderTextField('Title Line 1', siteContent.contact?.hero?.title1, (v) => handleContentChange('contact', 'hero', 'title1', v))}
                        {renderTextField('Title Line 2', siteContent.contact?.hero?.title2, (v) => handleContentChange('contact', 'hero', 'title2', v))}
                        {renderTextField('Subtitle', siteContent.contact?.hero?.subtitle, (v) => handleContentChange('contact', 'hero', 'subtitle', v), true)}
                        {renderTextField('Phone Number', siteContent.contact?.hero?.phone, (v) => handleContentChange('contact', 'hero', 'phone', v))}
                        {renderTextField('Email Address', siteContent.contact?.hero?.email, (v) => handleContentChange('contact', 'hero', 'email', v))}
                      </>
                    ), 'contact-hero')}

                    {renderSection('Form Section', (
                      <>
                        {renderTextField('Form Title', siteContent.contact?.form?.title, (v) => handleContentChange('contact', 'form', 'title', v))}
                        {renderTextField('Form Subtitle', siteContent.contact?.form?.subtitle, (v) => handleContentChange('contact', 'form', 'subtitle', v), true)}
                      </>
                    ), 'contact-form')}
                  </div>
                )}

                {/* Global Settings Editor */}
                {selectedPage === 'global' && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Global Settings</h2>

                    {renderSection('Company Information', (
                      <>
                        {renderTextField('Company Name', siteContent.global?.company, (v) => handleContentChange('global', 'company', null, v))}
                        {renderTextField('Phone Number', siteContent.global?.phone, (v) => handleContentChange('global', 'phone', null, v))}
                        {renderTextField('Email Address', siteContent.global?.email, (v) => handleContentChange('global', 'email', null, v))}
                        {renderTextField('Location', siteContent.global?.location, (v) => handleContentChange('global', 'location', null, v))}
                      </>
                    ), 'global-info')}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Contact Forms Tab */}
          {activeTab === 'submissions' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-bold text-gray-900">Contact Form Submissions ({submissions.length})</h2>
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
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">{sub.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{sub.email}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{sub.service || '-'}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 max-w-xs truncate">{sub.message || '-'}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{new Date(sub.timestamp).toLocaleDateString()}</td>
                      </tr>
                    ))}
                    {submissions.length === 0 && (
                      <tr><td colSpan="5" className="px-4 py-8 text-center text-gray-500">No submissions yet</td></tr>
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
                <h2 className="font-bold text-gray-900">Newsletter Subscribers ({subscribers.length})</h2>
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
                      <tr><td colSpan="2" className="px-4 py-8 text-center text-gray-500">No subscribers yet</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Admin;
