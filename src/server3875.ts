
const express = require('express')
import {handler3875} from "./handler3875";
const app = express()
app.get('/3875', handler3875)
app.listen(3000, () => {})
        