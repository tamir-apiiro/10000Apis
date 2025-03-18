
const express = require('express')
import {handler3880} from "./handler3880";
const app = express()
app.get('/3880', handler3880)
app.listen(3000, () => {})
        