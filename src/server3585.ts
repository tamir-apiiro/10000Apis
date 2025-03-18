
const express = require('express')
import {handler3585} from "./handler3585";
const app = express()
app.get('/3585', handler3585)
app.listen(3000, () => {})
        