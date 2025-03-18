
const express = require('express')
import {handler3131} from "./handler3131";
const app = express()
app.get('/3131', handler3131)
app.listen(3000, () => {})
        