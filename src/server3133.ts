
const express = require('express')
import {handler3133} from "./handler3133";
const app = express()
app.get('/3133', handler3133)
app.listen(3000, () => {})
        