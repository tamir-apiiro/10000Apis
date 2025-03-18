
const express = require('express')
import {handler3137} from "./handler3137";
const app = express()
app.get('/3137', handler3137)
app.listen(3000, () => {})
        