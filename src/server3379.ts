
const express = require('express')
import {handler3379} from "./handler3379";
const app = express()
app.get('/3379', handler3379)
app.listen(3000, () => {})
        