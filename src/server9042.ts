
const express = require('express')
import {handler9042} from "./handler9042";
const app = express()
app.get('/9042', handler9042)
app.listen(3000, () => {})
        