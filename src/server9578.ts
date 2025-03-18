
const express = require('express')
import {handler9578} from "./handler9578";
const app = express()
app.get('/9578', handler9578)
app.listen(3000, () => {})
        