
const express = require('express')
import {handler3147} from "./handler3147";
const app = express()
app.get('/3147', handler3147)
app.listen(3000, () => {})
        