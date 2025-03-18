
const express = require('express')
import {handler9053} from "./handler9053";
const app = express()
app.get('/9053', handler9053)
app.listen(3000, () => {})
        