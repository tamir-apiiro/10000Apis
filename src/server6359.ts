
const express = require('express')
import {handler6359} from "./handler6359";
const app = express()
app.get('/6359', handler6359)
app.listen(3000, () => {})
        