
const express = require('express')
import {handler6785} from "./handler6785";
const app = express()
app.get('/6785', handler6785)
app.listen(3000, () => {})
        