
const express = require('express')
import {handler3775} from "./handler3775";
const app = express()
app.get('/3775', handler3775)
app.listen(3000, () => {})
        