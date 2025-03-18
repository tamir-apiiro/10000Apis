
const express = require('express')
import {handler9378} from "./handler9378";
const app = express()
app.get('/9378', handler9378)
app.listen(3000, () => {})
        