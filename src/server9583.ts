
const express = require('express')
import {handler9583} from "./handler9583";
const app = express()
app.get('/9583', handler9583)
app.listen(3000, () => {})
        