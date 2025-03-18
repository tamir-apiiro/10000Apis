
const express = require('express')
import {handler3755} from "./handler3755";
const app = express()
app.get('/3755', handler3755)
app.listen(3000, () => {})
        