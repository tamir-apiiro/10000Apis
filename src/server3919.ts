
const express = require('express')
import {handler3919} from "./handler3919";
const app = express()
app.get('/3919', handler3919)
app.listen(3000, () => {})
        