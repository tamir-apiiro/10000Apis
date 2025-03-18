
const express = require('express')
import {handler3386} from "./handler3386";
const app = express()
app.get('/3386', handler3386)
app.listen(3000, () => {})
        