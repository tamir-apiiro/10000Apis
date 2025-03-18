
const express = require('express')
import {handler9066} from "./handler9066";
const app = express()
app.get('/9066', handler9066)
app.listen(3000, () => {})
        