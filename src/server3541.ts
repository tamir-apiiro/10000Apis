
const express = require('express')
import {handler3541} from "./handler3541";
const app = express()
app.get('/3541', handler3541)
app.listen(3000, () => {})
        