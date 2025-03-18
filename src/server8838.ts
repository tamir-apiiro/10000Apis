
const express = require('express')
import {handler8838} from "./handler8838";
const app = express()
app.get('/8838', handler8838)
app.listen(3000, () => {})
        