
const express = require('express')
import {handler3796} from "./handler3796";
const app = express()
app.get('/3796', handler3796)
app.listen(3000, () => {})
        