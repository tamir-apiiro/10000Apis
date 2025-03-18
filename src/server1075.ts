
const express = require('express')
import {handler1075} from "./handler1075";
const app = express()
app.get('/1075', handler1075)
app.listen(3000, () => {})
        