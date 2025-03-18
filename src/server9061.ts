
const express = require('express')
import {handler9061} from "./handler9061";
const app = express()
app.get('/9061', handler9061)
app.listen(3000, () => {})
        