
const express = require('express')
import {handler9527} from "./handler9527";
const app = express()
app.get('/9527', handler9527)
app.listen(3000, () => {})
        