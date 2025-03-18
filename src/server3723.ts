
const express = require('express')
import {handler3723} from "./handler3723";
const app = express()
app.get('/3723', handler3723)
app.listen(3000, () => {})
        