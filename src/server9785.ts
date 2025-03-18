
const express = require('express')
import {handler9785} from "./handler9785";
const app = express()
app.get('/9785', handler9785)
app.listen(3000, () => {})
        