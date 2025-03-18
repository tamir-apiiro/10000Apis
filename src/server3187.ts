
const express = require('express')
import {handler3187} from "./handler3187";
const app = express()
app.get('/3187', handler3187)
app.listen(3000, () => {})
        