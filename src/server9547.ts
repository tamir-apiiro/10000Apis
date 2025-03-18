
const express = require('express')
import {handler9547} from "./handler9547";
const app = express()
app.get('/9547', handler9547)
app.listen(3000, () => {})
        