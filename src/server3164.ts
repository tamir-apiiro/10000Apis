
const express = require('express')
import {handler3164} from "./handler3164";
const app = express()
app.get('/3164', handler3164)
app.listen(3000, () => {})
        