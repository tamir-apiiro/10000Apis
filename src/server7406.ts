
const express = require('express')
import {handler7406} from "./handler7406";
const app = express()
app.get('/7406', handler7406)
app.listen(3000, () => {})
        