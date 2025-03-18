
const express = require('express')
import {handler3032} from "./handler3032";
const app = express()
app.get('/3032', handler3032)
app.listen(3000, () => {})
        