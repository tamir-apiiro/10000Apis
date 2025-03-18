
const express = require('express')
import {handler3787} from "./handler3787";
const app = express()
app.get('/3787', handler3787)
app.listen(3000, () => {})
        