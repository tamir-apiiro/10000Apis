
const express = require('express')
import {handler3117} from "./handler3117";
const app = express()
app.get('/3117', handler3117)
app.listen(3000, () => {})
        