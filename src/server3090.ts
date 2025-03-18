
const express = require('express')
import {handler3090} from "./handler3090";
const app = express()
app.get('/3090', handler3090)
app.listen(3000, () => {})
        