
const express = require('express')
import {handler3477} from "./handler3477";
const app = express()
app.get('/3477', handler3477)
app.listen(3000, () => {})
        