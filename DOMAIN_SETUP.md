# Custom Domain Configuration Guide
**Retail-Insights Deployment with Custom Domain**

## 🌐 Domain Setup Options

### Option 1: Subdomain (Recommended)
**Example**: `retail.yourdomain.com` or `insights.yourdomain.com`

**Benefits**:
- ✅ Easier DNS setup
- ✅ No impact on main domain
- ✅ Professional appearance
- ✅ SSL certificate automatic

### Option 2: Root Domain
**Example**: `yourdomain.com`

**Considerations**:
- ⚠️ More complex DNS setup
- ⚠️ May affect email/other services
- ✅ Shorter URL

### Option 3: Custom Subdomain
**Example**: `analytics.yourdomain.com` or `dashboard.yourdomain.com`

---

## 🚀 Vercel Domain Setup (Step-by-Step)

### Step 1: Basic Deployment
```bash
# If not deployed yet, deploy first
# Then proceed with domain setup
```

### Step 2: Access Vercel Dashboard
1. Go to: https://vercel.com/dashboard
2. Select your `retail-insights` project
3. Navigate to: **Settings** → **Domains**

### Step 3: Add Your Domain
**Input field**: Enter your chosen domain
- `retail.yourdomain.com` (recommended)
- `insights.yourdomain.com`
- `dashboard.yourdomain.com`

### Step 4: DNS Configuration

#### For Subdomain Setup:
```dns
Type: CNAME
Name: retail (or your chosen subdomain)
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

#### For Root Domain Setup:
```dns
Type: A
Name: @ (root)
Value: 76.76.19.61

Type: A
Name: @ (root)  
Value: 76.223.126.88

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 5: SSL Certificate
- ✅ **Automatic**: Vercel provides free SSL certificates
- ✅ **HTTPS**: Your domain will automatically redirect to HTTPS
- ⏱️ **Activation Time**: 5-10 minutes after DNS propagation

---

## 🌍 DNS Provider Instructions

### Cloudflare
1. Dashboard → DNS → Records
2. Add new record with values above
3. Proxy status: DNS only (gray cloud)

### GoDaddy
1. Domain Portfolio → DNS → Records
2. Add CNAME record
3. Save changes

### Namecheap
1. Domain List → Manage → Advanced DNS
2. Add new record
3. Save all changes

### Route 53 (AWS)
1. Hosted zones → Select domain
2. Create record set
3. Configure as above

---

## ✅ Verification Steps

### 1. DNS Propagation Check
```bash
# Check if DNS is propagated
nslookup retail.yourdomain.com
```

### 2. SSL Certificate Verification
- Visit: `https://retail.yourdomain.com`
- Look for 🔒 lock icon in browser
- Certificate should show "Issued by: Let's Encrypt"

### 3. Application Functionality
- ✅ All 6 modules load correctly
- ✅ Charts and data display properly  
- ✅ Responsive design works
- ✅ No mixed content warnings

---

## 🔧 Troubleshooting

### Common Issues

#### DNS Not Propagating
**Solution**: 
- Wait 5-30 minutes for DNS propagation
- Check DNS with online tools: https://whatsmydns.net
- Clear browser cache

#### SSL Certificate Error
**Solution**:
- Ensure DNS is correctly configured
- Wait for certificate provisioning (up to 24 hours)
- Contact Vercel support if persistent

#### Domain Not Working
**Checklist**:
- [ ] DNS records are correct
- [ ] Domain is not expired
- [ ] No conflicting DNS records
- [ ] Vercel domain is properly added

---

## 📊 Expected Results

### Performance
- **Load Time**: 1-2 seconds global
- **SSL Grade**: A+ rating
- **CDN**: Global edge network
- **Uptime**: 99.9% SLA

### URLs That Will Work
- `https://retail.yourdomain.com` (main app)
- `https://retail.yourdomain.com/` (dashboard)
- All modules accessible via navigation

### Example Domain Suggestions
- `retail-insights.yourdomain.com`
- `analytics.yourdomain.com`
- `dashboard.yourdomain.com`
- `walmart-insights.yourdomain.com`
- `retail.yourdomain.com`

---

## 💡 Best Practices

### Domain Selection
- ✅ Use subdomain for easier management
- ✅ Choose descriptive name
- ✅ Keep it short and memorable
- ✅ Use HTTPS-only

### Security
- ✅ Enable HTTPS redirect
- ✅ Use strong SSL configuration
- ✅ Regular security updates via Vercel
- ✅ Monitor domain expiration

---

## 🎯 Next Steps After Domain Setup

1. **Update Documentation**: Update README.md with new domain
2. **Share Access**: Provide new URL to stakeholders
3. **SEO Setup**: Configure meta tags for custom domain
4. **Analytics**: Set up domain tracking if needed
5. **Monitoring**: Set up uptime monitoring

---

**Questions?** Contact support or refer to platform-specific documentation for advanced configurations.
