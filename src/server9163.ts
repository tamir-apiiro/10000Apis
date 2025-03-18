
const express = require('express')
import {handler9163} from "./handler9163";
const app = express()
app.get('/9163', handler9163)
app.listen(3000, () => {})
        