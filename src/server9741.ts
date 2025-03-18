
const express = require('express')
import {handler9741} from "./handler9741";
const app = express()
app.get('/9741', handler9741)
app.listen(3000, () => {})
        