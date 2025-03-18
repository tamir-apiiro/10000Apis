
const express = require('express')
import {handler9943} from "./handler9943";
const app = express()
app.get('/9943', handler9943)
app.listen(3000, () => {})
        