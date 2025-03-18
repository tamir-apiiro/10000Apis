
const express = require('express')
import {handler3380} from "./handler3380";
const app = express()
app.get('/3380', handler3380)
app.listen(3000, () => {})
        