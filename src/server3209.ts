
const express = require('express')
import {handler3209} from "./handler3209";
const app = express()
app.get('/3209', handler3209)
app.listen(3000, () => {})
        