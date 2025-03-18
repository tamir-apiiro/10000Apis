
const express = require('express')
import {handler3968} from "./handler3968";
const app = express()
app.get('/3968', handler3968)
app.listen(3000, () => {})
        