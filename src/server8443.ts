
const express = require('express')
import {handler8443} from "./handler8443";
const app = express()
app.get('/8443', handler8443)
app.listen(3000, () => {})
        