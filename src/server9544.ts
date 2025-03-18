
const express = require('express')
import {handler9544} from "./handler9544";
const app = express()
app.get('/9544', handler9544)
app.listen(3000, () => {})
        