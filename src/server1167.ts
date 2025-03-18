
const express = require('express')
import {handler1167} from "./handler1167";
const app = express()
app.get('/1167', handler1167)
app.listen(3000, () => {})
        