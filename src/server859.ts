
const express = require('express')
import {handler859} from "./handler859";
const app = express()
app.get('/859', handler859)
app.listen(3000, () => {})
        