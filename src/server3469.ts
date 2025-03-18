
const express = require('express')
import {handler3469} from "./handler3469";
const app = express()
app.get('/3469', handler3469)
app.listen(3000, () => {})
        