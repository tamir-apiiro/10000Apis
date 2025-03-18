
const express = require('express')
import {handler9587} from "./handler9587";
const app = express()
app.get('/9587', handler9587)
app.listen(3000, () => {})
        