
const express = require('express')
import {handler9646} from "./handler9646";
const app = express()
app.get('/9646', handler9646)
app.listen(3000, () => {})
        