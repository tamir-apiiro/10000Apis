
const express = require('express')
import {handler9199} from "./handler9199";
const app = express()
app.get('/9199', handler9199)
app.listen(3000, () => {})
        