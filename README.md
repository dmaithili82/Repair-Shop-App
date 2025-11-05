# 🔧 Repair Shop Management App — Full-Stack AWS Deployment

This project demonstrates a **real-world full-stack deployment** using multiple AWS services — simulating what a **Cloud Support Engineer or DevOps Engineer** does in production environments.  

It showcases **secure hosting, CDN integration, backend deployment, and cloud troubleshooting** — end-to-end on AWS.

---

## 🧠 Overview

The **Repair Shop Management App** is a simple full-stack web application that allows users to view repair requests for electronic devices.

- **Frontend:** React.js hosted on Amazon S3 + distributed via CloudFront (HTTPS)
- **Backend:** Node.js + Express deployed on AWS Elastic Beanstalk
- **Security:** Managed through IAM roles and CloudFront SSL certificates

---

## 🏗️ Architecture Diagram

User (Browser)
↓
AWS CloudFront (CDN + HTTPS)
↓
Amazon S3 (Static React Frontend)
↓
Elastic Beanstalk (Node.js Backend)
↓
EC2 (Managed instances under the hood)
↓
IAM Roles + Policies (Secure access control)

## ⚙️ AWS Services Used

| AWS Service | Purpose |
|--------------|----------|
| **Elastic Beanstalk** | Deploy and manage Node.js backend |
| **Amazon S3** | Host static frontend website |
| **Amazon CloudFront** | CDN + HTTPS acceleration |
| **AWS IAM** | Role-based security configuration |
| **Amazon EC2** | Backend compute instances |
| **CloudWatch** | Logging and monitoring |

---

## 🧩 Workflow

1. Created a Node.js + Express backend with a `/api/repairs` endpoint.  
2. Deployed the backend using **Elastic Beanstalk** (`eb create`, `eb deploy`).  
3. Created a React frontend and built static files using `npm run build`.  
4. Uploaded the React build to **S3** for static website hosting.  
5. Configured **CloudFront** in front of S3 for HTTPS and global delivery.  
6. Connected frontend → backend securely via API fetch calls.  
7. Validated, tested, and troubleshooted CORS, HTTPS, and caching errors.  

---

## 🔐 Security Practices

- Used **IAM roles** instead of hard-coded credentials  
- Enabled **HTTPS** via default CloudFront certificates  
- Restricted **S3 public access** (only CloudFront can access content)  
- Followed **least privilege** model for access control  
## 🧰 Tech Stack

- **Frontend:** React.js  
- **Backend:** Node.js, Express.js  
- **AWS Services:** Elastic Beanstalk, S3, CloudFront, IAM, EC2  
- **Tools:** AWS CLI, EB CLI, Git Bash  

---

## 🪜 Key Learning Outcomes

- Deploying a **full-stack app on AWS**  
- Configuring and debugging **Elastic Beanstalk environments**  
- Hosting static websites using **S3 + CloudFront**  
- Managing **IAM permissions** securely  
- Fixing real-world issues like 502 errors, mixed content, and ACL misconfigurations  

---

## 🧩 Screenshots

| Preview | Description |
|----------|--------------|
| ![Frontend UI](screenshots/frontend_app.png) | Deployed frontend (React + S3 + CloudFront) |
| ![API JSON](screenshots/api_json_output.png) | Backend API response (Elastic Beanstalk) |
| ![CloudFront Console](screenshots/cloudfront_list.png) | AWS CloudFront distribution setup |
| ![Elastic Beanstalk Dashboard](screenshots/beanstalk_dashboard.png) | Running Node.js app on EB |

## 🧹 Cleanup Commands (To Avoid Costs)

```bash
# Terminate Elastic Beanstalk environment
eb terminate repairshop-env

# Remove S3 bucket
aws s3 rm s3://repairshop-frontend-demo --recursive
aws s3 rb s3://repairshop-frontend-demo --force

# Disable & delete CloudFront distributions (frontend + backend)
# Done manually in AWS Console: Actions → Disable → Delete
