
const express = require('express')
import {handler9911} from "./handler9911";
const app = express()
app.get('/9911', handler9911)
app.listen(3000, () => {})
        