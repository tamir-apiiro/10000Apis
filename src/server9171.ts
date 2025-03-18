
const express = require('express')
import {handler9171} from "./handler9171";
const app = express()
app.get('/9171', handler9171)
app.listen(3000, () => {})
        