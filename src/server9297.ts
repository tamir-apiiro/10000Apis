
const express = require('express')
import {handler9297} from "./handler9297";
const app = express()
app.get('/9297', handler9297)
app.listen(3000, () => {})
        