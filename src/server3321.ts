
const express = require('express')
import {handler3321} from "./handler3321";
const app = express()
app.get('/3321', handler3321)
app.listen(3000, () => {})
        