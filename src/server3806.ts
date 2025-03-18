
const express = require('express')
import {handler3806} from "./handler3806";
const app = express()
app.get('/3806', handler3806)
app.listen(3000, () => {})
        