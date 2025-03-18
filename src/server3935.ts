
const express = require('express')
import {handler3935} from "./handler3935";
const app = express()
app.get('/3935', handler3935)
app.listen(3000, () => {})
        