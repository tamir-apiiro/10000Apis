
const express = require('express')
import {handler8972} from "./handler8972";
const app = express()
app.get('/8972', handler8972)
app.listen(3000, () => {})
        