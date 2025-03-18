
const express = require('express')
import {handler9856} from "./handler9856";
const app = express()
app.get('/9856', handler9856)
app.listen(3000, () => {})
        