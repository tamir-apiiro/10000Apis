
const express = require('express')
import {handler9509} from "./handler9509";
const app = express()
app.get('/9509', handler9509)
app.listen(3000, () => {})
        