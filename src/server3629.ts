
const express = require('express')
import {handler3629} from "./handler3629";
const app = express()
app.get('/3629', handler3629)
app.listen(3000, () => {})
        