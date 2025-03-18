
const express = require('express')
import {handler3672} from "./handler3672";
const app = express()
app.get('/3672', handler3672)
app.listen(3000, () => {})
        