
const express = require('express')
import {handler25} from "./handler25";
const app = express()
app.get('/25', handler25)
app.listen(3000, () => {})
        