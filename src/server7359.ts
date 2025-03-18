
const express = require('express')
import {handler7359} from "./handler7359";
const app = express()
app.get('/7359', handler7359)
app.listen(3000, () => {})
        