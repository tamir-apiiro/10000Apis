
const express = require('express')
import {handler3420} from "./handler3420";
const app = express()
app.get('/3420', handler3420)
app.listen(3000, () => {})
        