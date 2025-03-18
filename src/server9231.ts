
const express = require('express')
import {handler9231} from "./handler9231";
const app = express()
app.get('/9231', handler9231)
app.listen(3000, () => {})
        