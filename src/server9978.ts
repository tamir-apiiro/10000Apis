
const express = require('express')
import {handler9978} from "./handler9978";
const app = express()
app.get('/9978', handler9978)
app.listen(3000, () => {})
        