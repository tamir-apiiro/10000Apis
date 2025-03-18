
const express = require('express')
import {handler1245} from "./handler1245";
const app = express()
app.get('/1245', handler1245)
app.listen(3000, () => {})
        