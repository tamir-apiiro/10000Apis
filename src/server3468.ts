
const express = require('express')
import {handler3468} from "./handler3468";
const app = express()
app.get('/3468', handler3468)
app.listen(3000, () => {})
        