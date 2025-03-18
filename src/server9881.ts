
const express = require('express')
import {handler9881} from "./handler9881";
const app = express()
app.get('/9881', handler9881)
app.listen(3000, () => {})
        