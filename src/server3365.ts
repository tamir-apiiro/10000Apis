
const express = require('express')
import {handler3365} from "./handler3365";
const app = express()
app.get('/3365', handler3365)
app.listen(3000, () => {})
        