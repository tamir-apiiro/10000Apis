
const express = require('express')
import {handler9552} from "./handler9552";
const app = express()
app.get('/9552', handler9552)
app.listen(3000, () => {})
        