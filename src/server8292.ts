
const express = require('express')
import {handler8292} from "./handler8292";
const app = express()
app.get('/8292', handler8292)
app.listen(3000, () => {})
        