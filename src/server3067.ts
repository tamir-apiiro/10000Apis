
const express = require('express')
import {handler3067} from "./handler3067";
const app = express()
app.get('/3067', handler3067)
app.listen(3000, () => {})
        