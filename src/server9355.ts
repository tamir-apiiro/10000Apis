
const express = require('express')
import {handler9355} from "./handler9355";
const app = express()
app.get('/9355', handler9355)
app.listen(3000, () => {})
        