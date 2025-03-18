
const express = require('express')
import {handler8581} from "./handler8581";
const app = express()
app.get('/8581', handler8581)
app.listen(3000, () => {})
        