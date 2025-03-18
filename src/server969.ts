
const express = require('express')
import {handler969} from "./handler969";
const app = express()
app.get('/969', handler969)
app.listen(3000, () => {})
        