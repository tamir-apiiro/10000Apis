
const express = require('express')
import {handler3957} from "./handler3957";
const app = express()
app.get('/3957', handler3957)
app.listen(3000, () => {})
        