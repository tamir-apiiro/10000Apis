
const express = require('express')
import {handler3765} from "./handler3765";
const app = express()
app.get('/3765', handler3765)
app.listen(3000, () => {})
        