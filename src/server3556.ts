
const express = require('express')
import {handler3556} from "./handler3556";
const app = express()
app.get('/3556', handler3556)
app.listen(3000, () => {})
        