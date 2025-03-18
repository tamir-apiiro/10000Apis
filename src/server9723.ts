
const express = require('express')
import {handler9723} from "./handler9723";
const app = express()
app.get('/9723', handler9723)
app.listen(3000, () => {})
        