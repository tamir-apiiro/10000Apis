
const express = require('express')
import {handler8848} from "./handler8848";
const app = express()
app.get('/8848', handler8848)
app.listen(3000, () => {})
        