
const express = require('express')
import {handler3945} from "./handler3945";
const app = express()
app.get('/3945', handler3945)
app.listen(3000, () => {})
        