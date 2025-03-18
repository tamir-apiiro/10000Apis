
const express = require('express')
import {handler3889} from "./handler3889";
const app = express()
app.get('/3889', handler3889)
app.listen(3000, () => {})
        