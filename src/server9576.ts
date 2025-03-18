
const express = require('express')
import {handler9576} from "./handler9576";
const app = express()
app.get('/9576', handler9576)
app.listen(3000, () => {})
        