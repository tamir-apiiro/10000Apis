
const express = require('express')
import {handler8868} from "./handler8868";
const app = express()
app.get('/8868', handler8868)
app.listen(3000, () => {})
        