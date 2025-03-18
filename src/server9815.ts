
const express = require('express')
import {handler9815} from "./handler9815";
const app = express()
app.get('/9815', handler9815)
app.listen(3000, () => {})
        