
const express = require('express')
import {handler1205} from "./handler1205";
const app = express()
app.get('/1205', handler1205)
app.listen(3000, () => {})
        