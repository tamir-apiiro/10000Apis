
const express = require('express')
import {handler3013} from "./handler3013";
const app = express()
app.get('/3013', handler3013)
app.listen(3000, () => {})
        