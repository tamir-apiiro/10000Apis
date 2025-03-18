
const express = require('express')
import {handler9235} from "./handler9235";
const app = express()
app.get('/9235', handler9235)
app.listen(3000, () => {})
        