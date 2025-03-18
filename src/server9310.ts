
const express = require('express')
import {handler9310} from "./handler9310";
const app = express()
app.get('/9310', handler9310)
app.listen(3000, () => {})
        