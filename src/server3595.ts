
const express = require('express')
import {handler3595} from "./handler3595";
const app = express()
app.get('/3595', handler3595)
app.listen(3000, () => {})
        