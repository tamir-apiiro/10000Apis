
const express = require('express')
import {handler3124} from "./handler3124";
const app = express()
app.get('/3124', handler3124)
app.listen(3000, () => {})
        