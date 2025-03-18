
const express = require('express')
import {handler9126} from "./handler9126";
const app = express()
app.get('/9126', handler9126)
app.listen(3000, () => {})
        