
const express = require('express')
import {handler3823} from "./handler3823";
const app = express()
app.get('/3823', handler3823)
app.listen(3000, () => {})
        