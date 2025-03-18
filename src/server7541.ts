
const express = require('express')
import {handler7541} from "./handler7541";
const app = express()
app.get('/7541', handler7541)
app.listen(3000, () => {})
        