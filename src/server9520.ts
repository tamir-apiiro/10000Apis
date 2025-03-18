
const express = require('express')
import {handler9520} from "./handler9520";
const app = express()
app.get('/9520', handler9520)
app.listen(3000, () => {})
        