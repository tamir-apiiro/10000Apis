
const express = require('express')
import {handler3702} from "./handler3702";
const app = express()
app.get('/3702', handler3702)
app.listen(3000, () => {})
        