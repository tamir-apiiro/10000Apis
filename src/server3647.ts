
const express = require('express')
import {handler3647} from "./handler3647";
const app = express()
app.get('/3647', handler3647)
app.listen(3000, () => {})
        