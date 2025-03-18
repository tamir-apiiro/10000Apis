
const express = require('express')
import {handler3962} from "./handler3962";
const app = express()
app.get('/3962', handler3962)
app.listen(3000, () => {})
        