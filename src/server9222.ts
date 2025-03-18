
const express = require('express')
import {handler9222} from "./handler9222";
const app = express()
app.get('/9222', handler9222)
app.listen(3000, () => {})
        