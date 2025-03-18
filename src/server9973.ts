
const express = require('express')
import {handler9973} from "./handler9973";
const app = express()
app.get('/9973', handler9973)
app.listen(3000, () => {})
        