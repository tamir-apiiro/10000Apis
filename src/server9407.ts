
const express = require('express')
import {handler9407} from "./handler9407";
const app = express()
app.get('/9407', handler9407)
app.listen(3000, () => {})
        