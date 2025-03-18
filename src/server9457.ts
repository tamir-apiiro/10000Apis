
const express = require('express')
import {handler9457} from "./handler9457";
const app = express()
app.get('/9457', handler9457)
app.listen(3000, () => {})
        