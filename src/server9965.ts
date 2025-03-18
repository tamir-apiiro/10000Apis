
const express = require('express')
import {handler9965} from "./handler9965";
const app = express()
app.get('/9965', handler9965)
app.listen(3000, () => {})
        