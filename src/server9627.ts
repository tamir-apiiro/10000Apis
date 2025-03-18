
const express = require('express')
import {handler9627} from "./handler9627";
const app = express()
app.get('/9627', handler9627)
app.listen(3000, () => {})
        