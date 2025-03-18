
const express = require('express')
import {handler7671} from "./handler7671";
const app = express()
app.get('/7671', handler7671)
app.listen(3000, () => {})
        