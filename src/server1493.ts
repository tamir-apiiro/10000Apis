
const express = require('express')
import {handler1493} from "./handler1493";
const app = express()
app.get('/1493', handler1493)
app.listen(3000, () => {})
        