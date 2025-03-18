
const express = require('express')
import {handler8286} from "./handler8286";
const app = express()
app.get('/8286', handler8286)
app.listen(3000, () => {})
        