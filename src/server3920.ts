
const express = require('express')
import {handler3920} from "./handler3920";
const app = express()
app.get('/3920', handler3920)
app.listen(3000, () => {})
        