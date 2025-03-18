
const express = require('express')
import {handler9401} from "./handler9401";
const app = express()
app.get('/9401', handler9401)
app.listen(3000, () => {})
        