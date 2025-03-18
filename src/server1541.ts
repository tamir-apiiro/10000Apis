
const express = require('express')
import {handler1541} from "./handler1541";
const app = express()
app.get('/1541', handler1541)
app.listen(3000, () => {})
        