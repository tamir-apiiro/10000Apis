
const express = require('express')
import {handler2595} from "./handler2595";
const app = express()
app.get('/2595', handler2595)
app.listen(3000, () => {})
        