def packageJSONName
def packageJSONVersion

pipeline {
  agent any
  tools {
    nodejs "node"
  }
  parameters {
    choice(name: 'SEMVER_INCREMENT', choices: ['prerelease', 'prepatch', 'patch', 'preminor', 'minor', 'premajor', 'major'], description: 'Specify the semver increment for `npm version`')
    string(name: 'PREID', defaultValue: 'rc', description: '--preid parameter value to npm version')
    string(name: 'BRANCH', defaultValue: 'master', description: 'branch to build')
    booleanParam(name: 'CI', defaultValue: false, description: 'prevents versioning and publishing')
  }
  stages {
    stage('Checkout') {
      steps {
        sh "git checkout -b ${params.BRANCH.replaceFirst("origin/", "")}"
      }
    }
    stage('Install') {
      steps {
        sh "npm ci"
      }
    }
    stage('Version') {
      when { expression { !params.CI } }
      steps {
        sh "npm version ${params.SEMVER_INCREMENT} --preid=${params.PREID}"
        script {
          packageJSONVersion = sh(returnStdout: true, script: 'node -pe "require(\'./package.json\').version"').trim()
          packageJSONName = sh(returnStdout: true, script: 'node -pe "require(\'./package.json\').name"').trim()
        }
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
    stage('Publish') {
      when { expression { !params.CI } }
      steps {
        withNPM(npmrcConfig:'ux-nexus-publish-config') {
          sh 'npm publish ./dist --registry="http://ux-nexus.saas-n.com/repository/ux-npm/"'
        }
      }
    }
    stage('Push tag') {
      when { expression { !params.CI } }
      steps {
        sh "git push --tags origin HEAD"
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
        message: "${packageJSONName}@${packageJSONVersion} Publish SUCCESS - ${BRANCH}#${GIT_COMMIT.substring(0, 8)}"
      )
    }
    failure {
      slackSend (
        channel: '#glu-status',
        color: '#FF0000',
        message: "${packageJSONName} Publish FAILURE - ${BRANCH}#${GIT_COMMIT.substring(0, 8)} ${BUILD_URL}"
      )
      slackSend (
        channel: '#glu-support',
        color: '#FF0000',
        message: "${packageJSONName} Publish FAILURE- ${BRANCH}#${GIT_COMMIT.substring(0, 8)} ${BUILD_URL}"
      )
    }
    fixed {
      slackSend (
        channel: '#glu-status',
        color: '#00FF00',
        message: "${packageJSONName}@${packageJSONVersion} Publish FIXED - ${BRANCH}#${GIT_COMMIT.substring(0, 8)}"
      )
      slackSend (
        channel: '#glu-support',
        color: '#00FF00',
        message: "${packageJSONName}@${packageJSONVersion} Publish FIXED - ${BRANCH}#${GIT_COMMIT.substring(0, 8)}"
      )
    }
  }
}
