
const express = require('express')
import {handler9315} from "./handler9315";
const app = express()
app.get('/9315', handler9315)
app.listen(3000, () => {})
        