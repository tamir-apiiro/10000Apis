
const express = require('express')
import {handler9618} from "./handler9618";
const app = express()
app.get('/9618', handler9618)
app.listen(3000, () => {})
        