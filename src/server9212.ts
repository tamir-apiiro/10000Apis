
const express = require('express')
import {handler9212} from "./handler9212";
const app = express()
app.get('/9212', handler9212)
app.listen(3000, () => {})
        