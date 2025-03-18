
const express = require('express')
import {handler3668} from "./handler3668";
const app = express()
app.get('/3668', handler3668)
app.listen(3000, () => {})
        