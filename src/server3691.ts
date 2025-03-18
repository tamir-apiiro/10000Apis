
const express = require('express')
import {handler3691} from "./handler3691";
const app = express()
app.get('/3691', handler3691)
app.listen(3000, () => {})
        