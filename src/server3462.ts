
const express = require('express')
import {handler3462} from "./handler3462";
const app = express()
app.get('/3462', handler3462)
app.listen(3000, () => {})
        