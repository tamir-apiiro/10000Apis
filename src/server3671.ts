
const express = require('express')
import {handler3671} from "./handler3671";
const app = express()
app.get('/3671', handler3671)
app.listen(3000, () => {})
        