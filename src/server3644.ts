
const express = require('express')
import {handler3644} from "./handler3644";
const app = express()
app.get('/3644', handler3644)
app.listen(3000, () => {})
        