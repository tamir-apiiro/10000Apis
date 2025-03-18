
const express = require('express')
import {handler3096} from "./handler3096";
const app = express()
app.get('/3096', handler3096)
app.listen(3000, () => {})
        