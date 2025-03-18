
const express = require('express')
import {handler3933} from "./handler3933";
const app = express()
app.get('/3933', handler3933)
app.listen(3000, () => {})
        