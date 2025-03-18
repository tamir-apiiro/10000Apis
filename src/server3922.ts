
const express = require('express')
import {handler3922} from "./handler3922";
const app = express()
app.get('/3922', handler3922)
app.listen(3000, () => {})
        