
const express = require('express')
import {handler3994} from "./handler3994";
const app = express()
app.get('/3994', handler3994)
app.listen(3000, () => {})
        