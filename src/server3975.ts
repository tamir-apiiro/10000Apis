
const express = require('express')
import {handler3975} from "./handler3975";
const app = express()
app.get('/3975', handler3975)
app.listen(3000, () => {})
        