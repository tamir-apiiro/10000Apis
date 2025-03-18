
const express = require('express')
import {handler9233} from "./handler9233";
const app = express()
app.get('/9233', handler9233)
app.listen(3000, () => {})
        