
const express = require('express')
import {handler9449} from "./handler9449";
const app = express()
app.get('/9449', handler9449)
app.listen(3000, () => {})
        