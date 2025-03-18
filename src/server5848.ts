
const express = require('express')
import {handler5848} from "./handler5848";
const app = express()
app.get('/5848', handler5848)
app.listen(3000, () => {})
        