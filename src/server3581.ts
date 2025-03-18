
const express = require('express')
import {handler3581} from "./handler3581";
const app = express()
app.get('/3581', handler3581)
app.listen(3000, () => {})
        