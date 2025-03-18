
const express = require('express')
import {handler3579} from "./handler3579";
const app = express()
app.get('/3579', handler3579)
app.listen(3000, () => {})
        