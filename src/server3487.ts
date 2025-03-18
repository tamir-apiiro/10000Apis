
const express = require('express')
import {handler3487} from "./handler3487";
const app = express()
app.get('/3487', handler3487)
app.listen(3000, () => {})
        