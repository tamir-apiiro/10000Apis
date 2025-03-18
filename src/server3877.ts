
const express = require('express')
import {handler3877} from "./handler3877";
const app = express()
app.get('/3877', handler3877)
app.listen(3000, () => {})
        