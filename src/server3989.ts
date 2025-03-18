
const express = require('express')
import {handler3989} from "./handler3989";
const app = express()
app.get('/3989', handler3989)
app.listen(3000, () => {})
        