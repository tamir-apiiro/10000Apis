
const express = require('express')
import {handler3328} from "./handler3328";
const app = express()
app.get('/3328', handler3328)
app.listen(3000, () => {})
        