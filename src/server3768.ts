
const express = require('express')
import {handler3768} from "./handler3768";
const app = express()
app.get('/3768', handler3768)
app.listen(3000, () => {})
        