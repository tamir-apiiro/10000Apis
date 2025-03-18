
const express = require('express')
import {handler9065} from "./handler9065";
const app = express()
app.get('/9065', handler9065)
app.listen(3000, () => {})
        