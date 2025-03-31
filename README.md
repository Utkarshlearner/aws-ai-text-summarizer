AI Summarizer AWS Project

🚀 Overview

This project is a serverless AI-powered text summarizer that uses AWS Bedrock, Lambda, API Gateway, DynamoDB, and a React.js frontend. It generates concise summaries of text input and caches results in DynamoDB for optimized performance.

📌 Features

✅ AI-powered text summarization using Amazon Bedrock
✅ Serverless architecture with AWS Lambda
✅ API Gateway for secure REST API endpoints
✅ DynamoDB caching to avoid redundant AI calls
✅ React.js frontend for user interaction
✅ CORS enabled for seamless frontend-backend communication

🏗️ Architecture
React.js (AWS Amplify UI) → API Gateway → AWS Lambda → Amazon Bedrock → DynamoDB


🛠️ Technologies Used

AWS Bedrock – AI model for text summarization
AWS Lambda – Serverless backend logic
API Gateway – Exposes API for frontend
DynamoDB – Caches summaries to reduce API calls
React.js – Frontend UI (hosted on AWS Amplify/S3)
CloudFormation – Infrastructure as Code (IaC)

🛠️ Prerequisites 

AWS Account
AWS CLI Installed & Configured
Node.js & npm Installed
Python 3.x Installed

Author
Utkarsh Rastogi