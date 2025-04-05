🧠 AI-Powered Text Summarizer (Serverless on AWS)


🚀 Project Overview
The AI Summarizer is a fully serverless, scalable application that generates intelligent and concise summaries of input text using Amazon Bedrock. To optimize performance and minimize redundant AI calls, results are cached using DynamoDB. The solution exposes a REST API using API Gateway, and provides an interactive React.js frontend hosted via AWS Amplify.


✅ Key Features
🔍 AI-Powered Summarization using Amazon Bedrock foundation models (e.g.Titan).
🛠️ Fully Serverless architecture built with AWS Lambda and API Gateway.
⚡ Low Latency Caching with DynamoDB to avoid repeated calls for the same input.
🌐 CORS-Enabled REST APIs for seamless frontend-backend communication.
💻 React.js Frontend with real-time input/output interaction.
📦 Infrastructure as Code (IaC) using AWS CloudFormation.


🏗️ Architecture Diagram
[React.js Frontend]
        |
        ▼
[API Gateway (REST)]
        |
        ▼
[AWS Lambda Function]
        |
        ├── Check DynamoDB for Cached Summary
        └── If Not Found → Call Amazon Bedrock (Titan.)
                |
                ▼
        Save Summary in DynamoDB → Return to Frontend


🛠️ Tech Stack
Service / Tech ---->	Purpose
--------------------------------------------------------
Amazon Bedrock ---->	AI/ML summarization using foundation models
AWS Lambda ---->	Backend business logic (Python)
API Gateway ---->	Secure RESTful endpoints
Amazon DynamoDB --->	Caching layer for summarized content
React.js ---->	Frontend user interface
AWS Amplify	---> Hosting for React frontend
CloudFormation	---> IaC to provision the infrastructure


⚙️ Prerequisites
Before you begin, ensure you have the following installed:

✅ An AWS Account
✅ AWS CLI installed and configured
✅ Node.js and npm installed (for React frontend)
✅ Python 3.x installed (for Lambda backend)
✅ Basic permissions to use Amazon Bedrock, Lambda, API Gateway, and DynamoDB


🧪 How It Works
User inputs text in the React app.
The input is sent via API Gateway to a Lambda function.
Lambda checks DynamoDB for a cached summary.
If not found, it calls Amazon Bedrock for summarization.
The summary is stored in DynamoDB and returned to the user.

📁 Project Structure
aws-ai-text-summarizer/
├── frontend/                # React.js frontend
├── infrastructure/          # Infrastructure as Code (IaC) templates
│   ├── amplify.yaml         # Amplify 
│   ├── apigateway.yaml      # API Gateway configuration
│   ├── dynamodb.yaml        # DynamoDB table definition
│   ├── iam.yaml             # IAM roles and policies
│   └── lambda.yaml          # Lambda function resources
├── deployment_steps/        # Steps for Deployment
└── README.md                # Project overview and usage


✍️ Author
Utkarsh Rastogi
AWS Community Builder 🚀
