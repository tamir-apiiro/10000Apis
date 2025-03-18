
const express = require('express')
import {handler3663} from "./handler3663";
const app = express()
app.get('/3663', handler3663)
app.listen(3000, () => {})
        