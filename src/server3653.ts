
const express = require('express')
import {handler3653} from "./handler3653";
const app = express()
app.get('/3653', handler3653)
app.listen(3000, () => {})
        