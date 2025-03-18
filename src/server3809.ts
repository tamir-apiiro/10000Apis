
const express = require('express')
import {handler3809} from "./handler3809";
const app = express()
app.get('/3809', handler3809)
app.listen(3000, () => {})
        