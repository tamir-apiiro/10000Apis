
const express = require('express')
import {handler9800} from "./handler9800";
const app = express()
app.get('/9800', handler9800)
app.listen(3000, () => {})
        