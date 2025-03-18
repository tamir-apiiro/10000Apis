
const express = require('express')
import {handler3725} from "./handler3725";
const app = express()
app.get('/3725', handler3725)
app.listen(3000, () => {})
        