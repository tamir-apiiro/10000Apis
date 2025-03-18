
const express = require('express')
import {handler3821} from "./handler3821";
const app = express()
app.get('/3821', handler3821)
app.listen(3000, () => {})
        