
const express = require('express')
import {handler9022} from "./handler9022";
const app = express()
app.get('/9022', handler9022)
app.listen(3000, () => {})
        