
const express = require('express')
import {handler9173} from "./handler9173";
const app = express()
app.get('/9173', handler9173)
app.listen(3000, () => {})
        