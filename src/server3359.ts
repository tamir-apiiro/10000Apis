
const express = require('express')
import {handler3359} from "./handler3359";
const app = express()
app.get('/3359', handler3359)
app.listen(3000, () => {})
        