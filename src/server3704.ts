
const express = require('express')
import {handler3704} from "./handler3704";
const app = express()
app.get('/3704', handler3704)
app.listen(3000, () => {})
        