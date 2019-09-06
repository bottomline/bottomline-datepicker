pipeline {
  agent any
  tools {
    nodejs "node"
  }
  stages {
    stage('Install') {
      steps {
        sh "npm ci"
      }
    }
    stage('Test') {
      steps {
        sh "npm run lint"
        sh "npm test"
      }
    }
    stage('Build') {
      steps {
        sh "npm run build"
      }
    }
  }
  post {
    always {
      deleteDir() /* clean up our workspace */
    }
    success {
      slackSend (
        channel: '#glu-status',
        color: '#00FF00',
        message: "@glu/datepicker-react CI SUCCESS - ${BRANCH_NAME}#${GIT_COMMIT.substring(0, 8)}"
      )
    }
    failure {
      slackSend (
        channel: '#glu-status',
        color: '#FF0000',
        message: "@glu/datepicker-react CI FAILURE - ${BRANCH_NAME}#${GIT_COMMIT.substring(0, 8)} ${BUILD_URL}"
      )
      slackSend (
        channel: '#glu-support',
        color: '#FF0000',
        message: "@glu/datepicker-react CI FAILURE - ${BRANCH_NAME}#${GIT_COMMIT.substring(0, 8)} ${BUILD_URL}"
      )
    }
    fixed {
      slackSend (
        channel: '#glu-status',
        color: '#00FF00',
        message: "@glu/datepicker-react CI FIXED - ${BRANCH_NAME}#${GIT_COMMIT.substring(0, 8)}"
      )
      slackSend (
        channel: '#glu-support',
        color: '#00FF00',
        message: "@glu/datepicker-react CI FIXED - ${BRANCH_NAME}#${GIT_COMMIT.substring(0, 8)}"
      )
    }
  }
}
