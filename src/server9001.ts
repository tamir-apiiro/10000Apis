
const express = require('express')
import {handler9001} from "./handler9001";
const app = express()
app.get('/9001', handler9001)
app.listen(3000, () => {})
        