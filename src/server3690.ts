
const express = require('express')
import {handler3690} from "./handler3690";
const app = express()
app.get('/3690', handler3690)
app.listen(3000, () => {})
        