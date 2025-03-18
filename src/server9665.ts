
const express = require('express')
import {handler9665} from "./handler9665";
const app = express()
app.get('/9665', handler9665)
app.listen(3000, () => {})
        