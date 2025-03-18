
const express = require('express')
import {handler8363} from "./handler8363";
const app = express()
app.get('/8363', handler8363)
app.listen(3000, () => {})
        