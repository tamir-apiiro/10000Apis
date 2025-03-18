
const express = require('express')
import {handler3169} from "./handler3169";
const app = express()
app.get('/3169', handler3169)
app.listen(3000, () => {})
        