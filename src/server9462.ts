
const express = require('express')
import {handler9462} from "./handler9462";
const app = express()
app.get('/9462', handler9462)
app.listen(3000, () => {})
        