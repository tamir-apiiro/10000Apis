
const express = require('express')
import {handler3864} from "./handler3864";
const app = express()
app.get('/3864', handler3864)
app.listen(3000, () => {})
        