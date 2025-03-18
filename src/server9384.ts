
const express = require('express')
import {handler9384} from "./handler9384";
const app = express()
app.get('/9384', handler9384)
app.listen(3000, () => {})
        