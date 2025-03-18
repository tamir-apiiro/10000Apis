
const express = require('express')
import {handler3559} from "./handler3559";
const app = express()
app.get('/3559', handler3559)
app.listen(3000, () => {})
        