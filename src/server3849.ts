
const express = require('express')
import {handler3849} from "./handler3849";
const app = express()
app.get('/3849', handler3849)
app.listen(3000, () => {})
        