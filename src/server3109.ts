
const express = require('express')
import {handler3109} from "./handler3109";
const app = express()
app.get('/3109', handler3109)
app.listen(3000, () => {})
        