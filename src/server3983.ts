
const express = require('express')
import {handler3983} from "./handler3983";
const app = express()
app.get('/3983', handler3983)
app.listen(3000, () => {})
        