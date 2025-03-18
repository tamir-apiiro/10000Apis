
const express = require('express')
import {handler9110} from "./handler9110";
const app = express()
app.get('/9110', handler9110)
app.listen(3000, () => {})
        