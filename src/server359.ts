
const express = require('express')
import {handler359} from "./handler359";
const app = express()
app.get('/359', handler359)
app.listen(3000, () => {})
        