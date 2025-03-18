
const express = require('express')
import {handler9387} from "./handler9387";
const app = express()
app.get('/9387', handler9387)
app.listen(3000, () => {})
        