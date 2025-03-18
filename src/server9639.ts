
const express = require('express')
import {handler9639} from "./handler9639";
const app = express()
app.get('/9639', handler9639)
app.listen(3000, () => {})
        