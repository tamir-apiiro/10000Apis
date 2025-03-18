
const express = require('express')
import {handler9044} from "./handler9044";
const app = express()
app.get('/9044', handler9044)
app.listen(3000, () => {})
        