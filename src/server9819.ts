
const express = require('express')
import {handler9819} from "./handler9819";
const app = express()
app.get('/9819', handler9819)
app.listen(3000, () => {})
        