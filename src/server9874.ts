
const express = require('express')
import {handler9874} from "./handler9874";
const app = express()
app.get('/9874', handler9874)
app.listen(3000, () => {})
        