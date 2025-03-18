
const express = require('express')
import {handler9359} from "./handler9359";
const app = express()
app.get('/9359', handler9359)
app.listen(3000, () => {})
        