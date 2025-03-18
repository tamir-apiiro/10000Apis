
const express = require('express')
import {handler9283} from "./handler9283";
const app = express()
app.get('/9283', handler9283)
app.listen(3000, () => {})
        