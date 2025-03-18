
const express = require('express')
import {handler9608} from "./handler9608";
const app = express()
app.get('/9608', handler9608)
app.listen(3000, () => {})
        