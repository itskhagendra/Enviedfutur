pipeline {
    agent any
    // agent {
    //     docker {
    //         image 'node:18.14.2-alpine' 
    //         args '-p 3000:3000' 
    //     }
    // }
    environment {
        npm_config_cache = 'npm-cache'
    }
    // tools {
    //     nodejs "node"
    // }
    stages {
        stage('prebuild') { 
            steps {
                sh 'pwd'
                sh 'ls -ltr'
                sh 'npm install' 
            }
        }
        stage('Build')
        {
            steps{
                sh 'npm run build'
                echo 'Build Completed'
            }
        }
        stage("Deploy")
        {
            steps
            {
                echo 'Stoping All Servers'
                sh ' pm2 delete all'
                echo 'starting server'
                sh 'pm2 start index.js' 
                echo 'Server Strated'
            }
        }
    }
}