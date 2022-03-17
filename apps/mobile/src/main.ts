import { runApp } from '@zhengxs/client'
import { Toast } from 'vant'

import './index.css'

import App from './App.vue'
import appConfig from './config'

Toast.allowMultiple()

runApp(App, appConfig)
