
const express = require('express')
import {handler9666} from "./handler9666";
const app = express()
app.get('/9666', handler9666)
app.listen(3000, () => {})
        