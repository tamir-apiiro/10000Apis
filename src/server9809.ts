
const express = require('express')
import {handler9809} from "./handler9809";
const app = express()
app.get('/9809', handler9809)
app.listen(3000, () => {})
        