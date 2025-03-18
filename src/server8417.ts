
const express = require('express')
import {handler8417} from "./handler8417";
const app = express()
app.get('/8417', handler8417)
app.listen(3000, () => {})
        