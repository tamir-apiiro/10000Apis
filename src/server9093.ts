
const express = require('express')
import {handler9093} from "./handler9093";
const app = express()
app.get('/9093', handler9093)
app.listen(3000, () => {})
        