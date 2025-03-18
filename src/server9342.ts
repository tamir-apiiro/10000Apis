
const express = require('express')
import {handler9342} from "./handler9342";
const app = express()
app.get('/9342', handler9342)
app.listen(3000, () => {})
        