
const express = require('express')
import {handler9202} from "./handler9202";
const app = express()
app.get('/9202', handler9202)
app.listen(3000, () => {})
        