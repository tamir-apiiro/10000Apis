
const express = require('express')
import {handler3270} from "./handler3270";
const app = express()
app.get('/3270', handler3270)
app.listen(3000, () => {})
        