
const express = require('express')
import {handler1359} from "./handler1359";
const app = express()
app.get('/1359', handler1359)
app.listen(3000, () => {})
        