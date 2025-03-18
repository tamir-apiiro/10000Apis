
const express = require('express')
import {handler451} from "./handler451";
const app = express()
app.get('/451', handler451)
app.listen(3000, () => {})
        