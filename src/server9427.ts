
const express = require('express')
import {handler9427} from "./handler9427";
const app = express()
app.get('/9427', handler9427)
app.listen(3000, () => {})
        