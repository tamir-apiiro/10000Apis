
const express = require('express')
import {handler9745} from "./handler9745";
const app = express()
app.get('/9745', handler9745)
app.listen(3000, () => {})
        