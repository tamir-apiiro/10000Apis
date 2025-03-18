
const express = require('express')
import {handler9633} from "./handler9633";
const app = express()
app.get('/9633', handler9633)
app.listen(3000, () => {})
        