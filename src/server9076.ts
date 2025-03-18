
const express = require('express')
import {handler9076} from "./handler9076";
const app = express()
app.get('/9076', handler9076)
app.listen(3000, () => {})
        