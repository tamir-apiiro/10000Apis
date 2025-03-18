
const express = require('express')
import {handler3427} from "./handler3427";
const app = express()
app.get('/3427', handler3427)
app.listen(3000, () => {})
        