
const express = require('express')
import {handler6620} from "./handler6620";
const app = express()
app.get('/6620', handler6620)
app.listen(3000, () => {})
        