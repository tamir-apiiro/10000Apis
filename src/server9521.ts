
const express = require('express')
import {handler9521} from "./handler9521";
const app = express()
app.get('/9521', handler9521)
app.listen(3000, () => {})
        