
const express = require('express')
import {handler3791} from "./handler3791";
const app = express()
app.get('/3791', handler3791)
app.listen(3000, () => {})
        