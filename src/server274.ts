
const express = require('express')
import {handler274} from "./handler274";
const app = express()
app.get('/274', handler274)
app.listen(3000, () => {})
        