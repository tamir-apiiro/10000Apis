
const express = require('express')
import {handler408} from "./handler408";
const app = express()
app.get('/408', handler408)
app.listen(3000, () => {})
        