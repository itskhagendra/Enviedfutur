pipeline {
    // agent any
    agent {
        docker {
            image 'node:18.14.2-alpine' 
            args '-p 3000:3000' 
        }
    }
    // tools {
    //     nodejs "node"
    // }
    stages {
        stage('Build') { 
            steps {
                sh 'pwd'
                sh 'ls -ltr'
                sh 'rm -r node_modules'
                sh 'npm install' 
            }
        }
    }
}