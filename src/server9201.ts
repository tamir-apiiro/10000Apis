
const express = require('express')
import {handler9201} from "./handler9201";
const app = express()
app.get('/9201', handler9201)
app.listen(3000, () => {})
        