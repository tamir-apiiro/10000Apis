
const express = require('express')
import {handler9287} from "./handler9287";
const app = express()
app.get('/9287', handler9287)
app.listen(3000, () => {})
        