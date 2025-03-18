
const express = require('express')
import {handler8062} from "./handler8062";
const app = express()
app.get('/8062', handler8062)
app.listen(3000, () => {})
        