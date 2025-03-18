
const express = require('express')
import {handler3628} from "./handler3628";
const app = express()
app.get('/3628', handler3628)
app.listen(3000, () => {})
        